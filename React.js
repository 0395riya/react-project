const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs')
const app = express();


const baseURL = 'https://softwareprofessionals.co.in/jobs/vida-clinical-studies-jobs-in-other-other-717';
let qs = [];
async function fetchDataFromURL(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        //   console.error("Error fetching data:", error);
        return null;
    }
}

function scrapeData(html) {
    const $ = cheerio.load(html);
    const Data = $('.searchlist li');

    Data.each(function (i, ind) {
        const title1 = $(ind).find('.col-md-7 > a'),
            title = $(title1).text();

        const company1 = $(ind).find('.location > a'),
            company = $(company1).text();

        const location1 = $(ind).find('.location'),
            location = $(location1).contents().filter(function () {
                return this.nodeType === 3;
            }).text().trim().replace(/^-|\s/g, '');

        const skills1 = $(ind).find('p'),
            skills = $(skills1).text();

        qs.push({ 'title': title, 'company': company, 'location': location, 'skills': skills });
    });

    // console.log(qs);
}

// Scrape the first page
//   fetchDataFromURL(baseURL)
//     .then((html) => {
//       if (html) {
//         scrapeData(html);

//         // Scrape the second page
//         const page2URL = baseURL + '/52';
//         return fetchDataFromURL(page2URL);
//       }
//     })
//     .then((html) => {
//       if (html) {
//         scrapeData(html);
//         // Write data to a file
//         fs.writeFile('Jobs.json', JSON.stringify(qs), (err) => {
//             if (err) throw err;
//             console.log('Data saved!');
//           });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });

async function scrapeAllPages(startPage, endPage) {
    for (let pageNumber = startPage; pageNumber <= endPage; pageNumber++) {
        const pageURL = `${baseURL}${pageNumber}`;
        const html = await fetchDataFromURL(pageURL);

        if (!html) {
            console.log(`Failed to fetch data from ${pageURL}`);
            continue;
        }

        scrapeData(html);
    }

    // Write data to a file once all pages have been scraped
    fs.writeFile('Jobs.json', JSON.stringify(qs), (err) => {
        if (err) throw err;
        console.log('Data saved!');
    });
}

// Start scraping from page 52 and end at page 60
scrapeAllPages(1, 52)
    .catch((err) => {
        console.log(err);
    });