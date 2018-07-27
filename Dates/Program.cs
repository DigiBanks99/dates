using System;

namespace Dates
{
  class Program
  {
    static void Main(string[] args)
    {
      try
      {
        var utc = DateTime.UtcNow;

        Console.WriteLine($"{utc:o}\tKind: {utc.Kind}");

        var tz = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time");

        var est = TimeZoneInfo.ConvertTimeFromUtc(utc, tz);

        Console.WriteLine($"{est:o}\tKind: {est.Kind}");
      }
      catch (Exception ex)
      {
        Console.Error.Write(ex);
      }
    }
  }
}
