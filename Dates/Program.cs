using System;
using System.Threading;

namespace Dates
{
  class Program
  {
    static void Main(string[] args)
    {
      try
      {
        var utc = DateTime.UtcNow;

        Console.WriteLine($"{utc:o}\t\tKind: {utc.Kind}");

        var tz = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time");

        var est = TimeZoneInfo.ConvertTimeFromUtc(utc, tz);

        Console.WriteLine($"{est:o}\t\tKind: {est.Kind}");

        Console.WriteLine($"{utc.ToLocalTime():o}\tKind: {utc.Kind}");
      }
      catch (Exception ex)
      {
        Console.Error.Write(ex);
      }
    }
  }
}
