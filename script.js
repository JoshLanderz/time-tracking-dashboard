dailyBtn = document.getElementById("daily-btn");
weeklyBtn = document.getElementById("weekly-btn");
monthlyBtn = document.getElementById("monthly-btn");

function dailyToggle(){
    document.getElementById("work-time").textContent = "5hrs";
    document.getElementById("work-hrs").textContent = "Yesterday - 7hrs";

    document.getElementById("play-time").textContent = "1hr";
    document.getElementById("play-hrs").textContent = "Yesterday - 2hrs";

    document.getElementById("study-time").textContent = "0hrs";
    document.getElementById("study-hrs").textContent = "Yesterday - 1hr";

    document.getElementById("exercise-time").textContent = "1hr";
    document.getElementById("exercise-hrs").textContent = "Yesterday - 1hr";

    document.getElementById("social-time").textContent = "1hr";
    document.getElementById("social-hrs").textContent = "Yesterday - 3hrs";
    document.getElementById("self-care-time").textContent = "0hrs";
    document.getElementById("self-care-hrs").textContent = "Yesterday - 1hr";
}

function weeklyToggle(){
    document.getElementById("work-time").textContent = "32hrs";
    document.getElementById("work-hrs").textContent = "Last Week - 36hrs";
    document.getElementById("play-time").textContent = "10hrs";
    document.getElementById("play-hrs").textContent = "Last Week - 8hrs";
    document.getElementById("study-time").textContent = "4hrs";
    document.getElementById("study-hrs").textContent = "Last Week - 7hrs";
    document.getElementById("exercise-time").textContent = "4hrs";
    document.getElementById("exercise-hrs").textContent = "Last Week - 5hrs";
    document.getElementById("social-time").textContent = "5hrs";
    document.getElementById("social-hrs").textContent = "Last Week - 10hrs";
    document.getElementById("self-care-time").textContent = "2hrs";
    document.getElementById("self-care-hrs").textContent = "Last Week - 2hrs";
}

function monthlyToggle(){
    document.getElementById("work-time").textContent = "103hrs";
    document.getElementById("work-hrs").textContent = "Last Month - 128hrs";
    document.getElementById("play-time").textContent = "23hrs";
    document.getElementById("play-hrs").textContent = "Last Month - 29hrs";

    document.getElementById("study-time").textContent = "13hrs";
    document.getElementById("study-hrs").textContent = "Last Month - 19hrs";

    document.getElementById("exercise-time").textContent = "11hrs";
    document.getElementById("exercise-hrs").textContent = "Last Month - 18hrs";

    document.getElementById("social-time").textContent = "21hrs";
    document.getElementById("social-hrs").textContent = "Last Month - 23hrs";

    document.getElementById("self-care-time").textContent = "7hrs";
    document.getElementById("self-care-hrs").textContent = "Last Month - 11hrs";
}