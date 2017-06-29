---
layout: project
title: Markov Chain Fun
meta: Text Generator using markov chain implementation in python
category: project
img-src: assets/img/harry_2.jpg
content-src: project/0000/08/08/python-markov-chain.html
github-url: Text_Generator_Markov
---

# Markov Chain Text Generator {% include icon-github.html username='trevorforrey' git-url='Text_Generator_Markov' %}

This was a fun small project. I didn't know much about Markov Chains and wanted
to learn through making something. After a lot of reading and watching tutorials
this was the outcome. Here's an example output from inputting the first chapter
of a Harry Potter book.

> He found what he was looking furiously at Harry, his face like a gigantic
beet with a mustache: “MOTORCYCLES DON’T FLY!”
Dudley came waddling toward them as fast asleep.
Dudley stood with his nose pressed on, “is that last night Voldemort
turned up in Godric’s Hollow. He went to find the Potters’ son, Harry.
But — he couldn’t be able to see anything else to do with living in a dark cupboard,
but Harry had no one. Everybody knew that Dudley’s birthday, his parents had died of boredom
itself — no company except stupid people drumming their fingers on the glass. Harry
peered at it. Boa Constrictor’s tank had vanished. The great snake was uncoiling itself rapidly,
slithering over bits of wood and stone. Dudley and Piers to be spending the day somewhere that
wasn’t there — or rather, as though she’d just swallowed a lemon.
“And come back and fi nd the house. When he had been waiting
on a cold, hard wall all day,” said Harry, “honestly . . .”
But Uncle Vernon sugg

First, the dictionary of prefixes / suffixes is created from the source text.

{% highlight python %}
import random

# Reads text file and puts contents in one string
file = open("TextFile.txt")
base_text = ""
for line in file:
    base_text += line
base_text.replace('\n', ' ').replace('\r', '')

prefix_num = 10
prefixes = {}

# For every text "node" of text in the file
for character in range(0,len(base_text) - prefix_num):

    # Grab the next "node" of text
    gram = base_text[character:character + prefix_num]

    # If the text node hasn't been seen before, create a collection for it
    if gram not in prefixes:
        prefixes[gram] = []

    # Append the next node in the substring to the substring collection
    prefixes[gram].append(base_text[character + prefix_num])
{% endhighlight %}

After creating an array of prefixes and suffixes found in the source text, it's
time to create some randomly generated content. This function randomly selects
a found suffix of the current "node" and then uses that as the next prefix to find
a random suffix for.

{% highlight python %}
# Function that generates a set amount of randomly generated text
def generateText(amount_of_generated_text):

    # Grab the first "gram" of the text (based on prefix limit)
    currentGram = base_text[0:prefix_num]
    result = currentGram

    # For each character group in the size of the generated text
    for character_group in range(0,amount_of_generated_text):
        #print("For generation: " + currentGram)

        # Grab collection of all possible suffixes based on current prefix
        try:
            possible_characters = prefixes[currentGram]
        except:
            #print("I Broke")
            continue

        # Randomly choose the next text node to add to the generated text
        next_character = random.choice(possible_characters)

        # Add character to the result generated text
        result += next_character
        length = len(result)

        # Grab the next node to process
        currentGram = result[length - prefix_num:length]

    print(result)
{% endhighlight %}

I really enjoyed making this and hope to explore more content generation projects
in the future.
