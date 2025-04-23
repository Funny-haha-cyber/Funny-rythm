// Sample data (you can replace this with your actual song data)
const songs = [
    {
        title: "I want wind to blow by The Microphones",
        lyrics: "<br>The thunderclouds broke up<br>And the rain dried up, the lightning let up<br>The clacking shutters just shut up<br>There's no black and white, no change in the light<br>No night, no golden sun<br>The sound of cars, the smell of bars<br>The awful feeling of electric heat<br>Under fluorescent lights, there's sacrifice<br>There's hard feelings, there's pointless waste<br>I want wind to blow<br>My clothes off me, sweep me off my feet<br>Take me up, don't bring me back<br>Oh, where can i see days pass by me?<br>I have no head to hold in grief<br>But there's no hope for me, I've been set free<br>There's no breeze, there's no ship on my sea",
        meaning: "They want the wind to blow"
    },
    {
        title: "Tek It by Cafuné",
        lyrics: "<br>Where did you learn what it means to reciprocate?<br>And how much can I be expected to tolerate?<br>So I started to think about the plans I made<br>The debt, unpaid<br>And you just can't call<br>A spade a spade<br>I watch the moon<br>Let it run my mood<br>Can't stop thinking of you<br>I watch you (now I let it go)<br>(And I watch as things play out like)<br>So long nice to know you I'll be<br>Moving on<br>We started off in such a nice place<br>We were talking the same language<br>I o-open and I'm closing<br>You can't stand the thought<br>Of a real beating heart<br>You'd be holding, having trouble<br>O-O-Owning and admit that I am hoping<br>I watch the moon<br>Let it run my mood<br>Can't stop thinking of you<br>I watch you (now I let it go)<br>(And I watch as things play out like)<br>So long nice to know you I'll be<br>Moving on<br>Moving on<br>You<br>Yeah, I always know the truth<br>But I can't just say it to you<br>Yeah, I know the truth<br>I knew<br>Yeah, I always know the truth<br>But I can't just say it to you<br>Yeah, I know the truth<br>I never thought we'd see it through<br>I never could rely on you<br>And few times your face came<br>Into view<br>Into view<br>I'm not into you<br>Into you",
        meaning: "This song reminds me of one my old friends, they told me they loved me, however left. They called me their moon, but i was the one to let them ruin my mood.<br>I love this song."
    },
 {
        title: "I. Her Body Was Made of Static by oh, raven girl",
        lyrics: "<br>Her body was made of static<br>And she was helpless<br>She was featherless<br>She was exposed<br>For something she didn't do<br>I tried to stop it<br>But I was too late",
        meaning: "Sounds like her body was made of static."
    },

    
    // Add more songs here
];

// Search function
document.getElementById('search').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const searchQuery = this.querySelector('input[type="search"]').value.toLowerCase();
    const result = songs.find(song => song.title.toLowerCase() === searchQuery);

    // Get the result div to display found lyrics and meaning
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    if (result) {
        // Create elements to display the song details
        const titleElement = document.createElement('h3');
        titleElement.textContent = result.title;

        const lyricsElement = document.createElement('p');
        lyricsElement.innerHTML = `<strong>Lyrics:</strong> ${result.lyrics}`;

        const meaningElement = document.createElement('p');
        meaningElement.innerHTML = `<strong>Meaning:</strong> ${result.meaning}`;

        // Append the elements to the result div
        resultDiv.appendChild(titleElement);
        resultDiv.appendChild(lyricsElement);
        resultDiv.appendChild(meaningElement);
    } else {
        resultDiv.innerHTML = '<p>Song not found.</p>';
    }

    // Clear the input field after searching
    this.querySelector('input[type="search"]').value = '';
});
