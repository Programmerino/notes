# Academic vs. popular descriptions in PLT
## Introduction
In this analysis, I aim to identify and analyze key rhetorical distinctions between academic and popular sources in the field of programming language theory through a case study of articles written about dependent type systems.

### Background
To very briefly provide background, Per Martin-Löf's intuitionistic type theory provides an alternative foundation of mathematics to the ubiquitously used Zermelo–Fraenkel set theory. Foundations of math are used to interpret and/or prove mathematical statements, such as what the meaning of logical operators are, etc. Programming languages often use type theories to provide additional verifiability to programs written in them. Dependent types come from intuitionistic type theory, and are used in some of these type theories, particularly academic ones, arguably because they help advance the goal of verifiability by making types more precise. This is most important for high-stakes applications, or for mathematicians who are using programming to help assist in proofs, etc.

The first article was published in a conference proceeding, while the second was published in a magazine intended for “pragmatic programmers”. Since a common criticism of academia is its lack of practicality, these two articles should be contrasting enough to allow for sufficient analysis.
## Forum Details
![[Callaghan '22#Callaghan '22 Forum Description]]
![[Xi '99#Xi '99 Forum Description]]
## Summarization
![[Callaghan '22#Callaghan '22 Summary]]
![[Xi '99#Xi '99 Summary]]
## Analysis
### Purpose
The author's main purpose in Callaghan '22 seems to be to both explain a programming paradigm, and explore the utility of dependent types in proving programs. He begins by introducing the dependent types and demonstrating their use in Idris, then builds on this by demonstrating how dependent types can serve as proof obligations for programs, and finally concludes with a (prominent) call to action for more applications of dependent types to real-world programming.

The author's main purpose in Xi '99 seems to be to explore the principles and properties of language design, specifically those related to dependent types. He begins by introducing the dependent types, then proceeds to explore its ramifications to language design, and finally concludes with examples of real-world applications of the concepts explored.
### Rhetorical Decisions
Perhaps the most obvious distinction between this article and the Xi '99 article is how the type system used in each article is explained. When reading Callaghan '22, there is a strong emphasis on showing by example before explaining the foundation behind the example. One instance of this can be found in the *Tests into Proofs* section, which starts off with:
>case_one_proof : (l : List Int)  
              -> (length l < 4) = True  
              -> foo l = reverse l
> 
  >The type represents the proposition: “for all lists l, where the length of l is less than 4, then foo on l is the same as reversing l.” This says precisely how we want foo to behave on short lists, for all possible inputs. Compare this to a set of tests...

This is a result of the purpose of the article – since it intends to educate rather than describe, it often chooses to use illustrations, such as code examples, to assist in its explanations. 

Conversely, the Xi '99 article is less pedagogical, and far more deliberate in its use of terminology and explanation; it intends to be the definitive resource on dependent types, and therefore takes time to clearly define its terminology and justify its design decisions. One example of this can be seen in the article's introduction:

>In this paper, we address the issue of designing a type system for practical programming in which a restricted form of dependent types is available, allowing more program invariants to be captured by types.  
  
This explanation is quite clear, and the reader can immediately gain a good understanding of what is being talked about.  
  
While Xi '99 spends a great deal of time justifying its design decisions, Callaghan '22 does not. In fact, Callaghan '22 spends little time justifying its design decisions, and when it does, it's very brief.  
  
One brief example can be found in the following paragraph:  
  
>Dependent types are introduced in an earlier article in this series as a richer language of types, allowing us to explain more about what a program was doing, by encoding structural information and proofs about properties.  
  
This sentence provides the reader with an important piece of information: that dependent types provide a way to encode structural information. The author does not, however, explain why this is valuable, or what problems it solves.  
  
It's also important to note that Callaghan '22 does not attempt to explain concepts such as inductive types, coinductive types, or their uses; a definition (if it is even given) is placed in close proximity to the explanation, so as to not interrupt the flow of explanation.  
  
Xi '99, on the other hand, spends a great deal of time justifying its design decisions, and does so with a great deal of clarity.  
  
A specific justification is given below:  
  
>We require index objects to be pure. In fact, our type system is parameterized over a domain of constraints from which type index objects are drawn. We can maintain this purity and still make the connection to run-time values by using singleton types, such as int(n) which contains just the integer n.  
  
This justification is relatively short, but quite clear, and the reader can immediately understand why this decision was made.  
  
>The main contribution of the paper lies in our language design, including the formulation of type-checking rules which makes the approach practical.  
  
This sentence also explains precisely why the article is important.  
  
Comparing the two articles, it is clear that Xi '99 provides a much more detailed explanation of it's subject, and spends a great deal of time justifying its design decisions. Callaghan '22, on the other hand, provides the reader with an overview, and reduces its explanations to brief examples.
### Contextual Differences and Reader Benefit
Callaghan '22, as described in the introduction, is part of a series of blog posts about how to use functional programming techniques to improvement real-world development. As the author said, dependent types can allow developers to express more information about what a program is doing by replacing ad-hoc tests with proofs. The author provided a simple word wrap program and described how dependent types could be used to check certain properties of the program.

Xi '99, on the other hand, is part of the author's PhD thesis. The author described how dependent types can be used to express more information about what a program is doing. The author also provided some practical examples, such as the code excerpt above. The author argued that dependent types can provide more verifiability and more safety, but at the cost of requiring more annotations. The author also argued that dependent types can be useful even in situations where the programmer doesn't intend to write proofs.

Callaghan '22 and Xi '99, then, address similar issues. However, Callaghan '22 appeals to a practitioner audience who may or may not have any experience with dependent types. Xi '99, on the other hand, appeals to a practitioner audience that already uses dependent types with some regularity.

Callaghan '22 is more accessible than Xi '99. But Xi '99 is more thorough. Callaghan '22 only scratches the surface of what dependent types can do. Xi '99 dives in deeper and explores a variety of examples.

Callaghan '22 and Xi '99, then, complement each other.
### Conclusion
This analysis shows that while both articles are using dependent types to give some (possibly) needed precision to programs, they are on opposite ends of the spectrum when it comes to explaining these dependent types.  
  
Callaghan '22 is explaining a programming paradigm, and is thus more concerned with providing the reader with examples than fully explaining the underlying theory.  
  
Xi '99 is explaining the fundamentals of a type system, and is thus more concerned with providing the reader with a thorough understanding of the underlying theory than providing the reader with examples.  
  
Both articles ultimately provide the reader with an understanding of the topic, but Callaghan '22 does so in a much more “hands on” manner, whereas Xi '99 does so in a more academic manner.
### Works Cited
Callaghan, P. (2022, June 11). Dependent Types: A New Paradigm? The Pragmatic Programmers. https://medium.com/pragmatic-programmers/dependent-types-a-new-paradigm-981b0c34ef7c
Subramaniam, V. (2022, August 31). Refactoring to Functional Style in Java 8: Using Infinite Sequences. The Pragmatic Programmers. https://medium.com/pragmatic-programmers/refactoring-to-functional-style-in-java-8-using-infinite-sequences-65222a25e9d3
Swaine, M., & PragPub writers. (2022, September 9). Functional Programming: A PragPub Anthology. https://pragprog.com/titles/ppanth/functional-programming-a-pragpub-anthology
The Pragmatic Bookshelf. (2022, September 9). Authors on the Pragmatic Bookshelf. https://pragprog.com/authors/
Xi, H., & Pfenning, F. (1999). Dependent types in practical programming. Proceedings of the 26th ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages, 214–227. https://doi.org/10.1145/292540.292560
