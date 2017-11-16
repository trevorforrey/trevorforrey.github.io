---
layout: project
title: Go Web Crawler
meta: Web Crawler that takes advantage of concurrent programming
category: project
img-src: assets/img/HolmesGopher.svg
content-src: project/2017/10/20/go-web-crawler.html
github-url: web_crawler
---

# Go Web Crawler {% include icon-github.html username='trevorforrey' git-url='web_crawler' %}

{:.image}
![Alt text](assets/img/ReadingGopher.svg "My Title")

After reading the book, _The Go Programming Language_, I had a strong itch to make something using Go.
I ended up deciding on creating a web crawler, with the attempt to build something
that fully took advantage of Golang's concurrency model. This project is loosely
based from a crawler example in the book. Read on to learn about my process in
creating this crawler and some problems I faced during my first Go program.

The project I worked towards was a web crawler that would output images found
while crawling. This project seemed fun from a user-experience standpoint as well
as being a practical application.

{:.image}
![Alt text](assets/img/HolmesGopher.svg "My Title")

To gain a better understanding of how much of an improvement Go routines would have
on my project, I decided to first start writing a non-concurrent, single threaded
version of my crawler. The overall structure was done recursively:

{% highlight go %}
func crawl(urls []string, depth int) []string {

	depth--
	if depth == 0 {
		fmt.Println("Reached depth of zero")
		return emptyList
	}

	for _, link := range urls {
		fmt.Println(link)
		pageImgs, err := extractImgs(link)

		if err != nil {
			fmt.Print(err)
			continue
		}

		resultImgs = append(resultImgs, pageImgs...)
		newUrls, err := extractLinks(link)

		if err != nil {
			fmt.Print(err)
			continue
		}
		resultUrls = append(newUrls, crawl(newUrls, depth)...)
	}
	return resultUrls
}
{% endhighlight %}

While testing this on crawling for images with the base root of my gitHub profile,
I got the results below:

>Image of results screenshot from recursive approach

After learning about common design patterns in Go, I thought the pipelining approach
would be perfect for my web crawler. As the next step in this project, I created
a basic pipeline design for my web crawler. My pipeline architecture consisted of
3 main go routines: a _Crawler_, a _Filter_ and a _Image Eater_. The Crawler's job
is to read an url from it's receiving (input) channel, and return the new links found
on the page on it's sending (output) channel. As it crawls through every node on a site
looking for links, it also sends images found to the Image Eating routine. The Filter
reads in links from its input channel, and determines if the link has already been searched.
If it has been searched, the filter doesn't send the link forward. The Image Eating routine
reads all available images that are sent to it. It doesn't send them off anywhere, just sits
there and eats images.

{% highlight go %}
// send starting links to worklist
	baseChan := gen(baseLinks)
	firstDiscovered := crawler(baseChan, images, writer)
	nextSet := filter(firstDiscovered, seenLinks)
	secondDiscovered := crawler(nextSet, images, writer)
	finalOutput := filter(secondDiscovered, seenLinks)

	// Then consume output
	for linkList := range finalOutput {
		for _, link := range linkList {
			resultVars.Links = append(resultVars.Links, link.Url)
		}
	}
{% endhighlight %}

{:.image}
![Alt text](assets/img/AsyncOneWorker.svg "My Title")
> Structure of Pipeline with one _Crawler_, _Filter_, and _Image Eater_

Changing to a pipelining architecture improved my project and brought crawling on
my github profile down to 27 seconds.

{:.image}
![Alt text](assets/img/Async-OneCrawler.png "My Title")

Finally, after getting my pipelining design working, I was able to start adding
multiple crawler routines and filter routines to quickly read off of the same input
channel, which greatly increased the efficiency of my image crawler.

{% highlight go %}
// Set up pipelines
	baseChan := gen(baseLinks)
	crawl1Chan := speedyCrawl(baseChan, images, writer)
	filter1Chan := speedyFilter(crawl1Chan, seenLinks)
	crawl2Chan := speedyMerge( // 7 crawling functions)
	finalOutput := speedyFilter(crawl2Chan, seenLinks)

	// Consume output
	for outputLink := range finalOutput {
		resultVars.Links = append(resultVars.Links, outputLink.Url)
	}
{% endhighlight %}

{:.image}
![Alt text](assets/img/Async-MultCrawlers.png "My Title")
> Structure of Pipeline with multiple _Crawlers_, _Filters_, and one _Image Eater_

Adding multiple crawlers and filters improved the performance of my crawler from
27 seconds to 4 seconds.

{:.image}
![Alt text](assets/img/AsynchMultWorkers.svg "My Title")

There are A LOT of improvements that are still left to make on this image crawler.
With the excitement of getting a concurrent program working, I let some error-handling
pass by, which I'll be adding in soon.

Thanks for reading about this young Gopher's first project! Expect to have more
Golang projects coming up!!
