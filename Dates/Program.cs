using System;

namespace Dates
{
  class Program
  {
    static void Main(string[] args)
    {
      DateTime utc = DateTime.UtcNow;

      Console.WriteLine($"{utc:o}\tKind: {utc.Kind}");
    }
  }
}
