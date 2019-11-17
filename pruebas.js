const fs = require("fs");
let ListFaqs= fs.readFileSync("C:/Users/soraw/DigitalHouse/dh-movies/faqs.json", 'utf8');
let ListFaqsArray =  JSON.parse(ListFaqs);

function ayudota(){
    const titleArray = [];
    for (let i = 0; i < ListFaqsArray.total_faqs; i++) {
        titleArray.push("\n"+ListFaqsArray.faqs[i].faq_title);
        titleArray.push("\n"+ListFaqsArray.faqs[i].faq_answer);
    }
    return titleArray;
}

console.log (ayudota())