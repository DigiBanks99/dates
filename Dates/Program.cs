using System;
using System.Diagnostics;
using System.Threading;

namespace Dates
{
  class Program
  {
    static void Main(string[] args)
    {
      try
      {

        var sw = new Stopwatch();

        sw.Start();
        var utc = DateTimeOffset.UtcNow;

        Console.WriteLine($"{utc:o}");

        var tz = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time");

        var est = TimeZoneInfo.ConvertTime(utc, tz);

        Console.WriteLine($"{est:o}");

        Console.WriteLine($"{utc.ToLocalTime():o}");
        sw.Stop();

        Console.WriteLine($"{sw.Elapsed}");
      }
      catch (Exception ex)
      {
        Console.Error.Write(ex);
      }
    }
  }
}
