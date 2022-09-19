# [**Callaghan** **'22** (06/11/2022, "Dependent Types: A New Paradigm?", [https://medium.com/pragmatic-programmers/dependent-types-a-new-paradigm-981b0c34ef7c](https://medium.com/pragmatic-programmers/dependent-types-a-new-paradigm-981b0c34ef7c), Accessed On: 09/11/2022)](zotero://select/library/items/XZEPNX2F)
## Extracts
### 1
Let’s do the proof. Basically, we’re going to use the hypothesis or assumption about the length of input to push some computation through the definitions, until we get to a point where the sameness is obvious. The first two steps are `intro l` and `intro H`. This moves the function’s two inputs into the proof context as assumptions, leaving a proof state like this:
```
- - - - -                     Assumptions:                - - - - -   
l : List Int  
H : length l < 4 = True  
 - - - - -                       Goal:                    - - - - -   
{ hole 2 }:  
  foo l = reverse l
```
### The WIder Picture
You’ve seen now how to do a very simple development in a type theory setting. The code and proof were quite basic, but I deliberately chose a straightforward example so we could cover the key ideas without too much distraction.
## Content
### Snapshot
![[storage/5PKQCDLE/dependent-types-a-new-paradigm-981b0c34ef7c.html]]

## Callaghan '22 Forum Description
### Introduction, Target Audience, and Purpose
PragPub is a program ran by *The Pragmatic Bookshelf* which publishes magazines written by multiple authors every month, each with a general topic area. The creator, Michael Swaine, writes “PragPub is a monthly magazine by and for software developers \[…\] that I created in 2009”. The description of an anthology comprised of selected articles from the magazine writes that… ![[Swaine '22#Extracts#1]]
Although this description appears to be poised for software developers in general, several articles require heavy understanding of functional programming before they can be well understood (such as the article chosen for this analysis). In general, the target audience consists of intermediary and expert software developers who are interested in functional programming. Since functional programming is more academic than other programming paradigms, there is some overlap to be expected with the audience of the other article analyzed.
### Visuals and Length
On a visual/structural level, the article makes frequent use of code blocks and other text-based illustrations to better articulate certain concepts. For example, consider the following excerpt:
![[Callaghan '22#Extracts#1]]
In addition, most blocks of text are relatively short, with some being as short as [[#Extracts#The WIder Picture|two sentences long]]. This article in particular is around 4,400 word longs, although there does not appear to be a consistent length PragPub publishes with (see [[Subramaniam '22|here]], and [[Dees '21|here]]).
### Authors
There appears to be a fixed set of PragPub authors, all of which have some level of experience with software development. The publisher's web page notes ![[ThePragmaticBookshelf '22#Extracts#1]]
%% Import Date: 2022-09-11T21:34:15.298-06:00 %%
