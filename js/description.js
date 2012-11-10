/* Display functions for sidepane info */
// called when snake acquires an item, descides which tip by game enum
function show_description(progress) {
    var normalized_progress = progress % NUM_TILES + 1; // start at 1

    $("#sidebar .info .description #focus-tile").removeClass();
    $("#sidebar .info .description #focus-tile").addClass("tile-" + normalized_progress);

    switch(normalized_progress) {
        case 1: // xbox live
            $("#sidebar .info .description #focus-text")
                .text("Word games, strategy, action-there's a game for everyone in Marketplace. The Games Hub is your on-the-go arcade, where you can play solo or use the free Xbox LIVE service to match wits with friends wherever you are. You can even track your Gamerscore and dress up your avatar, right on your phone.");
            break;
        case 2: // martketplace
            $("#sidebar .info .description #focus-text")
                .text("Marketplace is the place to shop for music, TV shows, movies, podcasts, and tens of thousands of standout apps and marquee games. Available in three places-your phone, the web, or the Zune software on your computer-Marketplace is quick and convenient. Lots of things are free, you can often try before you buy, and one-click billing makes checkout a breeze.");
            break;
        case 3: // camera
            $("#sidebar .info .description #focus-text")
                .text("Press the camera button to snap a quick pic, even when your phone is locked. Then share, tweet, text, or email it, all from one place. You can even tag a picture as you upload it to Facebook-your phone detects the faces automatically. The Pictures Hub houses your entire collection-including online albums-and even shows a feed of your friends' latest pics.");
            break;
        case 4: // office
            $("#sidebar .info .description #focus-text")
                .text("No more need to be chained to your desk-Windows Phone has mobile versions of Word, Excel, OneNote, and PowerPoint for working on the go. Start a Word doc or Excel workbook on your phone, then sync it to SkyDrive so you can write or edit some more on your computer later. And SharePoint Workspace Mobile makes it easier to collaborate with your coworkers when you're out and about.");
            break;
        case 5: // me
            $("#sidebar .info .description #focus-text")
                .text("The Me card is your profile on your phone. It's also your go-to spot for posting to social networks or for a quick look at who's tweeting about you, writing on your Facebook Wall, or commenting on the same stuff you are. A glance at the Me card's Live Tile on Start shows you the latest updates.");
            break;
        case 6: // people
            $("#sidebar .info .description #focus-text")
                .text("Only Windows Phone has a People Hub with one-touch access to Facebook, Twitter, and LinkedIn, so you'll always be in the loop. Skim the latest posts and pictures from your friends. Dial, text, or IM your contacts, one at a time or in groups. Or use the Me card to post your status, see who's writing on your Wall, or change your profile pictures, right from your phone.");
            break;
        case 7: // local scout
            $("#sidebar .info .description #focus-text")
                .text("Looking for stuff to do/see/buy/eat? Local Scout dishes up nearby restaurants, shops, and activities, so you can be an insider wherever you go. From the closest beach to the best brunch to upcoming local events, it's all a tap away. Tap a result and you'll see all its info-where it's located, how to get there, who to call, when it's open, the website-along with ratings and reviews and even related apps.");
            break;
        case 8: // settings
            $("#sidebar .info .description #focus-text")
                .text("Not only can you set up your email accounts on your phone, you can also add your Facebook, Twitter, and LinkedIn accounts. You can see all the feeds and status updates from those accounts right from the People Hub, and the pictures people post on Facebook in your Pictures Hub. And if your account also has calendars, contacts, tasks, or to-dos, those'll be added to your phone in all the right places.");
            break;
        case 9: // nokia
            $("#sidebar .info .description #focus-text")
                .text("Nokia and Microsoft intend to jointly create market-leading mobile products and services designed to offer consumers, operators and developers unrivalled choice and opportunity. As each company would focus on its core competencies, the partnership would create the opportunity for rapid time to market execution. Additionally, Nokia and Microsoft plan to work together to integrate key assets and create completely new service offerings, while extending established products and services to new markets.");
            break;
        case 10: // bing
            $("#sidebar .info .description #focus-text")
                .text("Where can we eat? When is the movie? How do I get there? What's that song? Press the Search button to get answers from Bing, or use Bing Maps to find an address or get directions. You can also search with your voice, snap a photo to get results with Vision search, or find out what song is playing with Music search—your phone \"listens\" and then finds the name, artist, album, and even where you can hear or buy it.");
            break;
        case 11: // eyeball
            $("#sidebar .info .description #focus-text").text("");
            break;
        case 12: // ie
            $("#sidebar .info .description #focus-text")
                .text("Internet Explorer Mobile puts the web in your pocket, harnessing the power of your phone's hardware for faster, smoother web browsing. Open multiple tabs, get search suggestions as you type in the address bar, and tap phone numbers and addresses on webpages to call or map them. Internet Explorer is social, too: with a few taps in the browser, you can share a web link to your social networks or via email.");
            break;
        case 13: // music
            $("#sidebar .info .description #focus-text").text("");
            break;
        case 14: // quick tiles?
            $("#sidebar .info .description #focus-text")
                .text("The Live Tiles on Start show you what's happening with your apps, your upcoming appointments, your social networks, and more. Get a quick weather update, find out when someone likes your Facebook post, and see how many calls you missed during your afternoon run. You can pin more things to Start to keep them handy: apps, contact Groups, a mapped location, a song or album, your best snapshots, a webpage… too many to list here!");
            break;
        case 15: // zune
            $("#sidebar .info .description #focus-text").text("Your Windows Phone isn't just a phone. It's also a great Zune music and video player.\n\n Listen to music while you surf the web or check your email, catch up on your favorite podcasts on your commute, or enjoy a movie on your next flight. There's no need to carry another device with you. Windows Phone has all your entertainment needs covered.");
            break;
        case 16: // microphone
            $("#sidebar .info .description #focus-text").text("");
            break;
        case 17: // calling
            $("#sidebar .info .description #focus-text").text("");
            break;
        case 18: // email
            $("#sidebar .info .description #focus-text")
                .text("Stay on top of that torrent of email-with Outlook Mobile, you can view only unread, urgent, or flagged messages, or use conversation view to group messages by subject. If you've got a bunch of accounts, you can create linked inboxes to streamline things-like one for personal mail and one for work (the accounts stay separate). Then pin them to Start to keep tabs on the incoming mail.");
            break;
        case 19: // messages
            $("#sidebar .info .description #focus-text")
                .text("\"I'm over here, to your left...no, your other left.\" \"OMG you have to see this.\" You'll get a little thrill when you see that there's a message for you on your Windows Phone. You may even start making up reasons to text or chat with your friends.");
            break;
        case 20: // security
            $("#sidebar .info .description #focus-text").text("");
            break;
        case 21: // calendar
            $("#sidebar .info .description #focus-text")
                .text("Life can be pretty chaotic, what with juggling job, family, and social obligations-and now we've all got multiple calendars to juggle, too. That's why we designed Windows Phone to show you all your events and to-do items in one place, helpfully color-coded so you know which calendar they're coming from.");
            break;
        case 22: // address book
            $("#sidebar .info .description #focus-text").text("");
            break;
        case 23: // wireless
            $("#sidebar .info .description #focus-text").text("");
            break;
        case 24: // music and videos
            $("#sidebar .info .description #focus-text")
                .text("The Music + Videos Hub is your anytime entertainment center. Play your tunes-synced from your PC-or download new music from Marketplace. Watch TV shows, movies, and your own videos on the high-res screen. Create custom playlists or let Smart DJ do it for you. And add an optional Zune Music Pass to get unlimited music for a low monthly fee.");
            break;
        case 25: // social networks
            $("#sidebar .info .description #focus-text")
                .text("We designed Windows Phone to help you get more out of your social networks-whether you're posting pictures of your loved ones, building your professional contact list, or tweeting your philosophy of life. Facebook, Twitter, Windows Live, and LinkedIn are right at your fingertips.");
            break;
    }
}
