function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6nWr0o1RudP":
        Script1();
        break;
      case "6WwGn2lziMp":
        Script2();
        break;
      case "6LYBvNNqrRS":
        Script3();
        break;
      case "5iI1PSUxIwP":
        Script4();
        break;
      case "5qeAdKljJb3":
        Script5();
        break;
      case "6lA0w41FyoR":
        Script6();
        break;
      case "6TG61CG4rTJ":
        Script7();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script5()
{
  $("#tab-customlink").show();
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  window.print();
}

