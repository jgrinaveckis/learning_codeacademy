function if_else(num) {
    if (num <= 0) return "Ne grupe";
    else if (num === 1) console.log("solo");
    else if (num === 2) console.log("duetas");
    else if (num === 3) console.log("trio");
    else if (num === 4) console.log("kvartetas");
    else  console.log("didele grupe");
}

if_else(4);