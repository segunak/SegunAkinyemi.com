


# make a script that takes in a table, maybe in csv file form, with two columns.
# one column you put the quote, one column you put the source, then you generate the quote format you need.

# for bible stuff, you could  also just make it one colunn. You put the bible verse in the column and then go
# out to bible.com, get the scripture, format it in quote format and spit back out a text file with the quote.

import os
import re
import sys
import csv
import json
import time
import chardet
import requests
import unicodedata
from bs4 import BeautifulSoup
from datetime import datetime

# Example Bible Gateway verse link
# https://www.biblegateway.com/passage/?search=Psalm119:2-9&version=NKJV
#https://www.biblegateway.com/passage/?search=Matthew3&version=NKJV

# TODO: Offer the ability to download as a PDF, Excel Spreadsheet, Word Document for Bible Studies.

bibleBookNumbers = {
    'Matthew': 40,
    'Mark': 41,
    'Luke': 42,
    'John': 43,
    'Acts': 44,
    'Revelation': 66
}

nkjvBibleFile = open('./docs/assets/json/nkjv.json')
nkjvBible = json.loads(nkjvBibleFile.read())
nkjvBibleFile.close()

quotes = []

with open('./docs/scripts/commandsofchrist.csv') as commands_file:
    commands_dict = csv.DictReader(commands_file, delimiter=',')

    for command in commands_dict:
        splitCommand = command['Command'].split(' ')
        bibleBookName = splitCommand[0]
        bibleBookInt = bibleBookNumbers[bibleBookName]
        splitChapterVerse = splitCommand[1].split(':')
        bibleChapter = int(splitChapterVerse[0])
        bibleVerses = [int(verse) for verse in splitChapterVerse[1].split('-')]
        bibleScriptureString = ''
        bibleVerseString = splitChapterVerse[1]

        if len(bibleVerses) == 2:
            for verse in range(bibleVerses[0], bibleVerses[1] + 1):
                verseText = next(
                    passage['text'] for passage in nkjvBible 
                    if passage['book'] == bibleBookInt and 
                       passage["chapter"] == bibleChapter and 
                       passage["verse"] == verse
                )
                bibleScriptureString += ' ' + verseText.strip()
        else:
            bibleScriptureString = next(
                    passage['text'] for passage in nkjvBible 
                    if passage['book'] == bibleBookInt and 
                       passage["chapter"] == bibleChapter and 
                       passage["verse"] == bibleVerses[0]
            )

        bibleScriptureString = re.sub(' +', ' ', bibleScriptureString).strip().replace('“', '"').replace('”', '"')
        bibleScriptureString = bibleScriptureString.encode('utf-8').decode('cp1252')
        
        quotesString = f'''> {bibleScriptureString}
>
> <cite>[{bibleBookName} {bibleChapter}:{bibleVerseString}](https://www.biblegateway.com/passage/?search={bibleBookName}{bibleChapter}:{bibleVerseString}&version=NKJV){{:target="_blank"}}</cite>

---
'''
        print(quotesString)
        quotes.append(quotesString)

currentTime = datetime.strftime(datetime.now(), '%Y-%m-%d-%H-%M')

with open(f'./docs/scripts/quoteoutput-{currentTime}.txt', 'w') as file:
    for quote in quotes:
        file.write(f'{quote}\n')
