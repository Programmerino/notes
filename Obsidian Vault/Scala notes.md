* Using _ creates a lambda function where the underscore is replaced with the input
* Union types can be used inline in function arguments and other places:
```scala
// union type parameter
def help(id: Username | Password) =
  val user = id match
    case Username(name) => lookupName(name)
    case Password(hash) => lookupPassword(hash)
  // more code here ...

// union type value
val b: Password | Username = if (true) name else password
```
* Records can be emulated with case classes
	* To record update, use inst.copy(field = newValue)
* Enums can contain values
* Function arguments can have default values
* Extension methods allow adding methods to closed classes:
```scala
extension (s: String)
  def hello: String = s"Hello, ${s.capitalize}!"
  def aloha: String = s"Aloha, ${s.capitalize}!"

"world".hello    // "Hello, World!"
"friend".aloha   // "Aloha, Friend!"
```
* The entry-point is defined like so:
```scala
import scala.io.StdIn.readLine

@main def helloInteractive() =
  println("Please enter your name:")
  val name = readLine()

  println("Hello, " + name + "!")
```
* String interpolation is done with an `s` before quotes and the variables prefixed with a dollar sign. Expressions can be wrapped in curly braces
* Multiline strings are achieved with three quotes on each side
* Scala 3 supports having no parentheses in if expressions
* For loop structure is `for i <- structure if i > 2 do f(i)`
	* Lists can be made from this using yield instead of do
* Match statements:
```scala
val i = 1

// later in the code ...
i match
  case 1 => println("one")
  case 2 => println("two")
  case _ => println("other")
```
Guards are supported by adding "if cond" after the case
* Matchable is an obj which can have its type matched against like so...
```scala
// getClassAsString is a method that takes a single argument of any type.
def getClassAsString(x: Matchable): String = x match
  case s: String => s"'$s' is a String"
  case i: Int => "Int"
  case d: Double => "Double"
  case l: List[_] => "List"
  case _ => "Unknown"
```
* A ranged sequence can be made like (1 to 10)
	```scala
(1 to 10 by 2).toList   // c: List[Int] = List(1, 3, 5, 7, 9)
```
```scala
val f = List.range(1, 5)        // f: List[Int] = List(1, 2, 3, 4)
val g = List.range(1, 10, 3)    // g: List[Int] = List(1, 4, 7)
```
* Objects can be used like modules and can extend traits
* The @tailrec annotation can be used to enforce tail recursion