// Sum Even Fibonacci Numbers

// Write a func named SumEvenFibonacci that takes a parameter of type int and returns a value of type int
// Generate all of the Fibonacci numbers starting with 1 and 2 and ending on the highest number before exceeding the parameter's value
// Each new number in the Fibonacci sequence is generated by adding the previous two numbers
   // - by starting with 1 and 2(the input could be smaller), the first 10 numbers will be:

package main

import(
  "fmt"
)

// My Answer
func main(){
  fmt.Println(BestSumEvenFibonacci(8))
}

func SumEvenFibonacciNumbers(limit int) int{
  counter := 0
  result := 0 
  for counter <= limit {
    fibFunc := Fibonacci()
    if fibFunc() % 2 == 0 {
      result += fibFunc()
    }
    counter++
  }
  return result
}

func Fibonacci() func() int {
  a, b := 0, 1
  return func() int {
    a, b = b, a + b
    return a
  }
}

// Best Answer
func BestSumEvenFibonacci(limit int) int{
  sum, a, b := 2, 1, 2
  for b <= limit {
    a, b = b, a + b
    if b % 2 == 0 { sum += b }
  }
  return sum
}
