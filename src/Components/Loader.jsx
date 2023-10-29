import React,{useEffect, useState} from 'react'
import tournamentGif from '../Public/tournament.gif';
import LoaderContainer from '../Styles/LoaderStyle';


function Loader() {
    const codingQuotes = [
        "Code is like humor. When you have to explain it, it’s bad. - Cory House",
        "The best error message is the one that never shows up. - Thomas Fuchs",
        "Every programmer is an author. - Sercan Leylek",
        "Coding is not just code, that is a live thing to serve everyone! - Ming Song",
        "Simplicity is the soul of efficiency. - Austin Freeman",
        "The best way to predict the future is to invent it. - Alan Kay",
        "Code is where the real bugs live. - Karen Swan",
        "The purpose of coding is abstraction, not automation. - Jeff Magee",
        "In order to understand recursion, one must first understand recursion. - Unknown",
        "Code speaks louder than words. - Unknown",
        "Coding is today's literacy. - Sefika Erdenay",
        "To iterate is human, to recurse divine. - L. Peter Deutsch",
        "The code you write makes you a programmer. The code you delete makes you a good one. - Mario Fusco",
        "Talk is cheap. Show me the code. - Linus Torvalds",
        "The more you code, the more you learn. - Unknown",
        "A language that doesn't affect the way you think about programming is not worth knowing. - Alan Perlis",
        "Coding is not just code, it's a solution to a problem. - Keith Thompson",
        "The best coders are lazy. - Karen Swan",
        "Programming isn't about what you know; it's about what you can figure out. - Chris Pine",
        "Coding is not magic. It's pure logic. - Unknown",
        "Code as if the next developer is a psychopath who knows where you live. - John F. Woods",
        "Programming can be fun, so can cryptography; however, they should not be combined. - Kreitzberg and Shneiderman",
        "Java is to JavaScript what car is to Carpet. - Chris Heilmann",
        "If debugging is the process of removing software bugs, then programming must be the process of putting them in. - Edsger Dijkstra",
        "There are only two kinds of programming languages: those people always bitch about and those nobody uses. - Bjarne Stroustrup",
        "First, solve the problem. Then, write the code. - John Johnson",
        "Code without tests is bad code. It doesn’t matter how fast you can make it, it doesn’t matter how shiny it is, it doesn’t matter how sexy it looks. If it doesn’t have tests, it’s bad code. - Uncle Bob Martin",
        "It's hard enough to find an error in your code when you're looking for it; it's even harder when you've assumed your code is error-free. - Steve McConnell",
        "Good code is its own best documentation. As you're about to add a comment, ask yourself, 'How can I improve the code so that this comment isn't needed?' - Steve McConnell",
        "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R. Hoare",
        "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity. - John Romero",
        "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. - Patrick McKenzie",
        "Don’t write better error messages, write code that doesn’t need them. - Jason C. McDonald",
        "The computer was born to solve problems that did not exist before. - Bill Gates",
        "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. - Mosher’s Law of Software Engineering",
    ];
      const [randomQuote, setRandomQuote] = useState('');
    
      const generateRandomQuote =() => {
        const randomIndex = Math.floor(Math.random() * codingQuotes.length);
        setRandomQuote(codingQuotes[randomIndex]);
      };
      
      useEffect(() => {
          generateRandomQuote();
          // eslint-disable-next-line
      }, []);

  return (
    <LoaderContainer>
        <div>

            <img src={tournamentGif} alt='Simple Loader'/>
            <p>{randomQuote}</p>
        
        </div>
    </LoaderContainer>
  )
}

export default Loader
