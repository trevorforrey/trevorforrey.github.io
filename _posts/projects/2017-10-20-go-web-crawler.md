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

After reading __ book on Golang, I had a strong itch to make something using Go.
I ended up deciding on creating a web crawler, with the attempt to build something
that fully took advantage of Golang's concurrency model. Read on to learn about
my process in creating this crawler and some problems I faced during my first Go
program.

The project I worked towards was a web crawler that would output images found
while crawling. This project seemed fun from a user-experience standpoint as well
as being a practical application.

{:.image}
![Alt text](assets/img/HolmesGopher.svg "My Title")

To gain a better understanding of how much of an improvement Go routines would have
on my project, I decided to first start writing a non-concurrent, single threaded
version of my crawler. The overall structure was done like this:

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

>Image of results screenshot from brute force approach

After creating a synchronous, recursive version of the image crawler, I took a step
closer to my crawling goals by updating my crawler to work asychronously, but with
only one filter, crawler, and image collector go routines. This didn't provide much
of an improvement as seen below.

>>Image of gist for asyncrhonous structure

>>Image of Results from just asynchronous structure

After learning about common design patterns in Go, I thought the pipelining approach
would be perfect for my web crawler. As the next step in this project, I created
a basic pipeline design for my web crawler. (More exp. of improvements)

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
>>Image of results
{:.image}
![Alt text](assets/img/Async-MultCrawlers.png "My Title")
>>Image of gist for structure

Finally, after getting my pipelining design working, I was able to start having
multiple crawler routines and filter routines quickly read off of the same input
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
![Alt text](assets/img/AsynchMultWorkers.svg "My Title")
>>Image of structure
>>Image of results
{:.image}
![Alt text](assets/img/Async-OneCrawler.png "My Title")

There are A LOT of improvements that are still left to make on this image crawler.
With the excitement of getting a concurrent program working, I let some error-handling
to pass by, which I'll be adding in soon. I'm currently planning on converting this
into a better web app by using the Buffalo framework.

Thanks for reading about this young Gopher's first project! Expect to have more
Golang projects coming up!!
