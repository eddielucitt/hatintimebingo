var bingoList = [];
bingoList[1] = [
 { name: "Open red vault in Mafia Town", types: ["vault"] },
 { name: "Get Mustache girl to say “See you around!” in Act 1-1 ", types: ["story"] }
];
bingoList[2] = [
 { name: "Talk to Mafia at Fruit Bar", types: ["talk"] },
 { name: "Find an explorer Badge", types: ["find"] }
];
bingoList[3] = [
 { name: "Get 1 energy juice", types: ["get"] },
 { name: "Get 1 revival candy", types: ["get"] },
];
bingoList[4] = [
 { name: "Get 1 revival candy and 1 energy juice", types: ["get"] },
 { name: "Get the camera and take a selfie", types: ["camera"] }
];
bingoList[5] = [
 { name: "Get the camera and take a selfie with vanessa", types: ["camera"] },
 { name: "Get the camera and take a selfie with mafia boss", types: ["camera"] }
];
bingoList[6] = [
 { name: "Get the camera and take a selfie with a Mafia", types: ["camera"] },
 { name: "Get the camera and take a selfie with Mustache Girl", types: ["camera"] }
];
bingoList[7] = [
 { name: "Get the camera and take a selfie with Thor", types: ["camera"] },
 { name: "Open blue vault in Mafia Town", types: ["vault"] }
];
bingoList[8] = [
 { name: "Open green vault in Mafia Town", types: ["vault"] },
 { name: "Find and speak to the milkman", types: ["find"] }
];
bingoList[9] = [
 { name: "Get into mafia HQ on any act except act 4", types: ["think"] },
 { name: "Get 10 BP", types: ["collect"] }
];
bingoList[10] = [
 { name: "Get to the credits", types: ["story"] },
 { name: "Kill 5 Mafia", types: ["kill","find"] }
];
bingoList[11] = [
 { name: "Kill 5 Birds", types: ["kill","find"] },
 { name: "Kill a Janitor", types: ["kill"] }
];
bingoList[12] = [
 { name: "Hookshot to an Island w/ a Chest & A Cannon on it", types: ["find"] },
 { name: "Beat the Cat Race without any badges", types: ["skill"] }
];
bingoList[13] = [
 { name: "Get Thor’s Cap", types: ["find"] },
 { name: "Complete Subcon Caves Act 2 without using the Hookshot", types: ["think","skill"] }
];
bingoList[14] = [
 { name: "Use 4 Cannons (out of the 5)", types: ["find"] },
 { name: "Complete Mafia Town Shop Secret", types: ["find","skill"] }
];
bingoList[15] = [
 { name: "Complete Mafia Town Pipe Secret", types: ["find","skill"] },
 { name: "Collect All Hats", types: ["find"] }
];
bingoList[16] = [
 { name: "Get 2 golden mafia ties", types: ["find"] },
 { name: "Collect the gold tie in the tiny chest", types: ["find"] }
];
bingoList[17] = [
 { name: "Draw a moustache and monocle in Trainwreck", types: ["story"] },
 { name: "Complete Trainwreck while collecting every clock", types: ["story","skill"] }
];
bingoList[18] = [
 { name: "Kill robot beneath underground market", types: ["kill","find"] },
 { name: "Speak to 10 different Mafia members", types: ["find"] }
];
bingoList[19] = [
 { name: "Help 2 old men from Mafia gangs", types: ["find","kill"] },
 { name: "Get the Witch Hat", types: ["find"] }
];
bingoList[20] = [
 { name: "Find and read 3 letters in Vanessa’s Mansion", types: ["find"] },
 { name: "Travel to Mustache Girl Island and back", types: ["think"] }
];
bingoList[21] = [
 { name: "Obtain Giant Orb on distant island", types: ["think","find"] },
 { name: "Obtain Ancient Tablet", types: ["find"] }
];
bingoList[22] = [
 { name: "Complete Subcon Caves Secret", types: ["find","skill"] },
 { name: "Complete Vanessa’s Manor Secret", types: ["find","skill"] }
];
bingoList[23] = [
 { name: "Collect 200 orbs", types: ["collect"] },
 { name: "Collect 300 orbs", types: ["collect"] }
];
bingoList[24] = [
 { name: "Collect and Unlock the Snatcher Badge", types: ["collect"] },
 { name: "Talk to the Tourist", types: ["find"] }
];
bingoList[25] = [
 { name: "Defeat the Beta Hero’s Challenge", types: ["story"] },
];
$(function() { srl.bingo(bingoList, 5); });
