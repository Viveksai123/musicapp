
import React from 'react';
import { useEffect, useState } from "react";
import { Edit2, Loader2 } from 'lucide-react';
import ParticlesComponent from './partical';
import NavBar from './NavBab';
import { FiCalendar, FiClock, FiMapPin, FiDollarSign, FiShoppingCart } from "react-icons/fi";
import { FaMusic, FaMoneyBillWave, FaFileAlt, FaHeadphones,FaReply, FaTrashAlt,FaHeart } from 'react-icons/fa';
import { FaDollarSign, FaGift, FaShoppingCart } from 'react-icons/fa';



import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const ParallaxSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(250px)",
    config: { tension: 500, friction: 90 },
  });

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};


const LandingPageView1 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const username = "vishal12";

  useEffect(() => {
    const fetchLandingPageData = async () => {

      const response =
      {
        "artistPage": {
          "artistName": "Vishal Mishra",
          "stageTitles": "5-Star Performer | Chart-Topping Artist | Voice Artist",
          "artistBio": "Hello, my name is Vishal Mishra, a passionate musician creating soulful melodies.",
          "artistPhoto": "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg",
          "gradientStart": "#0bf9b2",
          "gradientEnd": "#f1ce09"
        },
        "performances": [
          {
            "performanceId": "perf1",
            "eventTitle": "Live at Mumbai Arena",
            "description": "An acoustic performance for music lovers.",
            "ticketPrice": 1499,
            "durationMinutes": 120,
            "platform": "Stage",
            "performanceType": "Team"
          },
          {
            "performanceId": "perf2",
            "eventTitle": "Melody Night",
            "description": "A night of soulful tunes.",
            "ticketPrice": 699,
            "durationMinutes": 30,
            "platform": "Party",
            "performanceType": "Solo"
          },
          {
            "performanceId": "perf3",
            "eventTitle": "Symphony Session",
            "description": "A virtual symphony session with fans.",
            "ticketPrice": 499,
            "durationMinutes": 45,
            "platform": "Theater",
            "performanceType": "Solo"
          }
        ],
        "merchandise": [
          {
            "merchId": "merc1",
            "merchName": "Signed TShirt + Signed Cup + Signed Vinyl",
            "merchDescription": "Limited edition signed merchandise.",
            "price": 399,
            "merchType": "Exclusive",
            "imageURL": "https://img.freepik.com/premium-psd/assortment-merchandising-items_23-2150799377.jpg?semt=ais_hybrid"
          }
        ],
        "songSales": [
          {
            "songId": "song1",
            "title": "Melody of Dreams",
            "priceType": "Variable",
            "description": "An enchanting melody inspired by the beauty of nature.",
            "imageURL": "https://images.t2online.in/cdn-cgi/image/width=1280,quality=70/https://apis.t2online.in/image/journal/article.jpg?img_id=1204123&t=1730672058584"
          },
          {
            "songId": "song2",
            "title": "Echoes of the Heart",
            "priceType": "Set",
            "price": 100,
            "description": "A heartfelt ballad that resonates deeply with listeners.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/5.jpg"
          },
          {
            "songId": "song3",
            "title": "Rhythm of the Night",
            "priceType": "Set",
            "price": 200,
            "description": "A vibrant and energetic track perfect for dancing.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/1.jpg"
          },
          {
            "songId": "song4",
            "title": "Journey Within",
            "priceType": "Set",
            "price": 50,
            "description": "A soulful piece reflecting the artist's inner journey.",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          }
        ],
        "musicVideos": [
          {
            "videoId": "vid1",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          },
          {
            "videoId": "vid2",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://clikrecords.com/wp-content/uploads/2022/09/Vishal-Mishra-2.jpg"
          },
        ],
        "fanMessages": {
          "title": "Message Vishal Mishra",
          "description": "Send me your thoughts or questions.",
          "promisedReplyTime": "3"
        },
        "supportPage": {
          "title": "Show Your Love"
        },
        "musicPlatformLinks": [
          {
            "musicPlatform": "JioSaavan",
            "url": "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_",
            "icon": "https://images.sftcdn.net/images/t_app-icon-m/p/4b3bebe9-f429-42cc-89db-2a9493062a5e/2230401414/jiosaavn-logo"
          },
          {
            "musicPlatform": "Spotify",
            "url": "https://open.spotify.com/artist/5wJ1H6ud777odtZl5gG507",
            "icon": "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
          }
        ]
      }

      setLandingPageData(response);
      setProfileImage(response.artistPage.artistPhoto);

    };
    fetchLandingPageData();
  }, [username]);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar.offsetHeight;

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    } else {
      console.log(`Section with ID ${id} not found`);
    }
  };


  if (!landingPageData) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardContent className="pt-6">
          <div className="text-center">Landing page not found</div>
        </CardContent>
      </Card>
    );
  }

  const { artistPage, performances, merchandise, songSales, musicVideos, fanMessages, supportPage, musicPlatformLinks } = landingPageData;



  return (
    <div className="min-h-screen bg-gray-50"> 
      <ParticlesComponent style={{ zIndex: 0 }}
      
      />
      {/* Navbar Section */}
      <NavBar username={username} scrollToSection={scrollToSection} />
      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 pt-[100px]">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ">
          {/* Left Column */}
          <div
            className="lg:col-span-4 lg:sticky lg:top-[100px] lg:h-[calc(100vh-100px)] overflow-auto"
            style={{ overflow: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
           
        <ParallaxSection>

            {/* Profile Section */}
            <Card className="shadow-[0_0_15px_5px_#000000] animate__animated animate__fadeInDownBig bg-gradient-to-br from-[#4b0000] via-[#2a0000] to-black bg-opacity-80 backdrop-blur-lg text-white border-none">
  <CardContent className="pt-6 px-4 md:px-8 shadow-inner shadow-[#000000]">
    {/* Avatar and Artist Details Section */}
    <div className="flex flex-col items-center">
      <Avatar className="w-32 h-32 shadow-[0_0_15px_5px_#ffffff]">
        <AvatarImage src={profileImage || "/default-avatar.jpg"} alt="Profile" />
        <AvatarFallback className=" text-lg font-semibold ">{username}</AvatarFallback>
      </Avatar>
      <h2 className="text-2xl font-bold font-serif mt-4 text-center text-red-700">{artistPage.artistName}</h2>
      <Badge variant="secondary" className="mt-2 text-gray-300 hover:text-dark-red bg-gray-700 px-3 py-1 rounded-md">
        {artistPage.stageTitles}
      </Badge>
    </div>

    {/* Social Links Section */}
    <div className="mt-8">  
      <h3 className="text-lg font-semibold mb-4 text-red-700 text-center">Connect with me on:</h3>
      <div className="flex flex-col justify-center items-center gap-4">
        {musicPlatformLinks.map((link) => (
          <button
            key={link.musicPlatform + link.url}
            className="flex w-[35vh] items-center p-2 bg-[#282828] border border-gray-600 rounded-full shadow-[0_0_10px_#ffffff] hover:bg-[#000000] hover:text-white transition-all duration-300 ease-in-out"
            onClick={() => link.url && window.open(link.url, "_blank")}
          >
            {/* Platform Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 mr-4 shadow-[0_0_10px_2px_#ffffff]">
              {link.icon ? (
                <img
                  src={link.icon}
                  alt={`${link.musicPlatform} icon`}
                  className="w-14 h-14 object-cover rounded-full"
                />
              ) : null}
            </div>
            {/* Platform Name */}
            <span className={`text-sm font-medium ${link.musicPlatform ? '' : 'opacity-50'}`}>
              {link.musicPlatform || ' '}
            </span>
          </button>
        ))}
      </div>
    </div>
  </CardContent>
</Card>
</ParallaxSection>
          </div>
           
          {/* Right Column */}
          <div className="lg:col-span-8">
            {/* About Section */}
              {/* <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                  <CardDescription>{artistPage.artistBio}</CardDescription>
                </CardHeader>
              </Card> */}

            {/* Music Videos Section */}
            <ParallaxSection>
            <div id="videos">
  <Card className="bg-transperent border-none font-playfair  text-white shadow-md">
    <CardHeader>
      <CardTitle className="text-red-800 flex flex-col justify-center items-center">Music Videos</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 border-none md:grid-cols-2 animate__animated animate__fadeInRightBig gap-4">
        {musicVideos.map((video) => (
          <Card
            key={video.videoId}
            className="overflow-hidden border-none cursor-pointer w-full bg-[#282828] hover:bg-[#333333] transition-all duration-300 shadow-lg"
            onClick={() => window.open(video.redirectURL, '_blank')}
          >
            <div className="relative">
              {/* Image with a 3:2 aspect ratio */}
              <div className="w-full" style={{ paddingTop: '66.66%' /* 2/3 for 3:2 aspect ratio */ }}>
                <img
                  src={video.imageURL} // Assuming imageUrl is the field containing the image URL
                  alt={video.title}
                  className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover rounded-t-md"
                />
              </div>

              {/* Text content below the image */}
              <div className="p-2 bg-[#1a1a1a]/90 animate__animated animate__fadeInRightBig backdrop-blur-sm flex justify-between items-center text-gray-300">
                <span className="font-medium">{video.title}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-red-500 hover:bg-gradient-to-r hover:from-[#8b1a1a] hover:to-[#6a1212] transition-all"
                >
                  <Edit2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </CardContent>
  </Card>
</div>
</ParallaxSection>

  

            {/* Scrollable Sections */}
            <ScrollArea className="">

            <ParallaxSection>
            <div id="performances" className="mt-8">
  <div
    className="p-6 max-w-4xl mx-auto font-playfair bg-[#1e1e1e] bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg mb-8"
    style={{ border: "none" }} // Explicitly ensuring no borders
  >
    <h2
      className="text-4xl font-extrabold text-center text-gradient bg-gradient-to-r from-[#a24242] to-[#b80606] bg-clip-text text-transparent mb-8"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      Performances
    </h2>

    {performances.map((perf) => (
      <Card
        key={perf.performanceId}
        className="mb-6 bg-[#292929] rounded-xl shadow-md hover:shadow-[0_0_20px_#ff4500] transition-all duration-300" style={{ border: "none" }}
      >
        <CardHeader className="p-6 flex items-center">
          <div className="mr-4 flex-shrink-0">
            <div className="w-14 h-14 bg-gradient-to-br from-[#a24242] to-[#b80606] rounded-full flex items-center justify-center text-white shadow-lg">
              <FiCalendar className="w-8 h-8" />
            </div>
          </div>
          <div>
            <CardTitle
              className="text-2xl font-semibold text-red-800"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {perf.eventTitle}
            </CardTitle>
            <CardDescription
              className="text-gray-400 text-sm italic mt-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {perf.description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-6 bg-[#1f1f1f] rounded-lg">
          <ul
            className="text-gray-300 text-sm space-y-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <li className="flex items-center">
              <FiClock className="mr-2 text-red-800" /> Duration:{" "}
              <span className="italic">{perf.durationMinutes} mins</span>
            </li>
            <li className="flex items-center">
              <FiMapPin className="mr-2 text-red-800" /> Location:{" "}
              <span className="italic">{perf.platform}</span>
            </li>
            <li className="flex items-center">
              <FiDollarSign className="mr-2 text-red-800" /> Price:{" "}
              <span className="italic">${perf.ticketPrice}</span>
            </li>
          </ul>
          <Button
            className="mt-4 w-full flex items-center justify-center p-3 bg-[#282828] text-white rounded-md shadow-md hover:shadow-[0_0_15px_#ff6347] hover:bg-[#000000] transition-all duration-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <FiShoppingCart className="mr-2 w-5 h-5" />
            Book Now
          </Button>
        </CardContent>
      </Card>
    ))}
  </div>
</div>
</ParallaxSection>


<ParallaxSection>
<div id="songsSale">
  <div className="p-6 max-w-4xl mx-auto font-playfair bg-[#2a2a2a] rounded-3xl shadow-[0_0_15px_5px_rgba(255,255,255,0.1)] mb-8">
    <h2 className="text-4xl font-bold text-center text-gradient bg-gradient-to-r from-[#a24242] to-[#b80606] bg-clip-text text-transparent mb-8 font-merriweather flex items-center justify-center gap-2">
      <FaMusic className="text-[#b22222]" /> Songs for Sale
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {songSales.map((song) => (
        <div
          key={song.songId}
          className="bg-[#1e1e1e] bg-opacity-95 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform hover:scale-105 hover:shadow-[0_0_20px_#ff4500] duration-300"
        >
          {/* Image Section */}
          <div className="h-56 relative">
            <img
              src={song.imageURL}
              alt={song.title}
              className="object-cover w-full h-full rounded-t-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-50 rounded-t-lg"></div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3 font-merriweather flex items-center gap-2">
                {song.title}
              </h3>
              <p className="text-sm text-gray-300 mb-3 font-roboto flex items-center gap-2">
                <FaFileAlt className="text-[#b22222]" /> {song.description}
              </p>
              <p className="text-sm text-gray-300 mb-3 font-roboto flex items-center gap-2">
                <FaMoneyBillWave className="text-[#b22222]" />
                <span>
                  <span className="font-medium text-white">Pricing:</span> {song.priceType}
                  {song.price && ` - $${song.price}`}
                </span>
              </p>
              <p className="text-xs text-gray-500 italic font-roboto">
                * Get your favorite songs now!
              </p>
            </div>
            <button
              className="mt-4 px-5 py-3 text-white bg-gradient-to-r from-[#b22222] to-[#8b0000] hover:bg-gradient-to-l rounded-lg shadow-md hover:shadow-[0_0_15px_#ff4500] hover:scale-105 transition-all duration-300 font-poppins flex items-center justify-center gap-2"
            >
              <FaHeadphones className="w-5 h-5" /> View Song
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</ParallaxSection>




<ParallaxSection>
{/* Merchandise Section */}
<div id="merchandise">
  <div className="p-6 max-w-3xl mx-auto font-playfair bg-[#1e1e1e] bg-opacity-80 backdrop-blur-md rounded-3xl shadow-lg mb-8">
    <h2 className="text-3xl font-bold text-center text-gradient bg-gradient-to-r from-[#ff4d4d] to-[#cc0000] bg-clip-text text-transparent mb-6 font-merriweather flex items-center justify-center gap-2">
      🛍️ Merchandise
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {merchandise.map((merc) => (
        <div
          key={merc.merchId}
          className="bg-[#2a0000] bg-opacity-95 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] duration-300"
        >
          {/* Image Section */}
          <div className="h-48">
            <img
              src={merc.imageURL}
              alt={merc.merchName}
              className="object-cover w-full h-full rounded-t-lg"
            />
          </div>

          {/* Content Section */}
          <div className="p-4 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-merriweather">{merc.merchName}</h3>
              <p className="text-sm text-gray-300 font-roboto flex flex-col gap-2">
                <span className="flex items-center gap-2">
                  <FaDollarSign className="text-[#ff4d4d]" /> Price: ${merc.price}
                </span>
                <span className="flex items-center gap-2">
                  <FaGift className="text-[#ff4d4d]" /> Type: {merc.merchType}
                </span>
                <span className="text-gray-500 italic">{merc.merchDescription}</span>
              </p>
            </div>
            <button
              className="mt-4 w-full px-4 py-2 text-white bg-gradient-to-r from-[#ff4d4d] to-[#cc0000] hover:from-[#cc0000] hover:to-[#990000] rounded-lg shadow-md hover:shadow-[0_0_15px_red] transition-all duration-300 flex items-center justify-center gap-2 font-poppins"
            >
              <FaShoppingCart className="w-5 h-5" /> View Bundle
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</ParallaxSection>
<ParallaxSection>
{/* Messages Section */}
<div id="messages">
  <div className="p-6 max-w-3xl font-playfair mx-auto bg-[#1e1e1e] bg-opacity-80 backdrop-blur-md rounded-3xl shadow-lg mb-8">
    <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#ff4d4d] to-[#cc0000] bg-clip-text text-transparent mb-6 font-merriweather flex items-center justify-center gap-2">
      💌 Fan Messages
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Hardcoded Message 1 */}
      <div className="bg-[#2a0000] bg-opacity-95 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] duration-300">
        {/* Sender Section */}
        <div className="flex items-center gap-4 p-4">
          <img
            src="https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg"
            alt="Vishal Mishra"
            className="w-12 h-12 rounded-full border-2 border-[#ff4d4d]"
          />
          <div>
            <h3 className="text-lg font-bold text-white font-merriweather">Vishal Mishra</h3>
            <p className="text-xs text-gray-400">2025-01-10 10:30 AM</p>
          </div>
        </div>

        {/* Message Content */}
        <div className="px-4 flex-grow">
          <h4 className="text-xl font-semibold text-white mb-2">
            {fanMessages.title}
          </h4>
          <p className="text-sm text-gray-300 mb-4">
            {fanMessages.description}
          </p>
          <p className="text-sm text-gray-400 italic">
            Promised Reply Time: {fanMessages.promisedReplyTime} hours
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 p-4">
          <button
            className="flex items-center gap-2 w-full px-4 py-2 text-white bg-gradient-to-r from-[#ff4d4d] to-[#cc0000] hover:from-[#cc0000] hover:to-[#990000] rounded-lg shadow-md hover:shadow-[0_0_15px_red] transition-all duration-300"
            aria-label="Reply to message"
          >
            <FaReply className="w-5 h-5" /> Reply
          </button>
          <button
            className="flex items-center gap-2 w-full px-4 py-2 text-white bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-black rounded-lg shadow-md hover:shadow-[0_0_15px_gray] transition-all duration-300"
            aria-label="Delete message"
          >
            <FaTrashAlt className="w-5 h-5" /> Delete
          </button>
        </div>
      </div>

      {/* Hardcoded Message 2 */}
      <div className="bg-[#2a0000] bg-opacity-95 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] duration-300">
        {/* Sender Section */}
        <div className="flex items-center gap-4 p-4">
          <img
            src="https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg"
            alt="John Doe"
            className="w-12 h-12 rounded-full border-2 border-[#ff4d4d]"
          />
          <div>
            <h3 className="text-lg font-bold text-white font-merriweather">John Doe</h3>
            <p className="text-xs text-gray-400">2025-01-10 2:00 PM</p>
          </div>
        </div>

        {/* Message Content */}
        <div className="px-4 flex-grow">
          <h4 className="text-xl font-semibold text-white mb-2">
            Feedback on Your Last Video
          </h4>
          <p className="text-sm text-gray-300 mb-4">
            Your last video was incredible! Keep up the amazing work!
          </p>
          <p className="text-sm text-gray-400 italic">
            Promised Reply Time: 6 hours
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 p-4">
          <button
            className="flex items-center gap-2 w-full px-4 py-2 text-white bg-gradient-to-r from-[#ff4d4d] to-[#cc0000] hover:from-[#cc0000] hover:to-[#990000] rounded-lg shadow-md hover:shadow-[0_0_15px_red] transition-all duration-300"
            aria-label="Reply to message"
          >
            <FaReply className="w-5 h-5" /> Reply
          </button>
          <button
            className="flex items-center gap-2 w-full px-4 py-2 text-white bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-black rounded-lg shadow-md hover:shadow-[0_0_15px_gray] transition-all duration-300"
            aria-label="Delete message"
          >
            <FaTrashAlt className="w-5 h-5" /> Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</ParallaxSection>

{/* Support Section */}
<div id="support" className="py-10">
  {supportPage && (
    <div className="p-8 max-w-4xl font-playfair mx-auto bg-[#1e1e1e] bg-opacity-90 backdrop-blur-md rounded-xl shadow-xl mb-10 border border-[#2b2b2b]">
      {/* Section Header */}
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-[#ff4d4d] to-[#cc0000] bg-clip-text text-transparent mb-8 flex items-center justify-center gap-3">
        <FaHeart className="w-8 h-8" /> Support Me
      </h2>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Support Card */}
        <Card className="bg-[#2a0000] bg-opacity-95 border-none rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transform transition-transform duration-300 hover:scale-105">
          <CardHeader className="text-center p-6">
            <CardTitle className="text-2xl font-bold text-white">
              {supportPage.title}
            </CardTitle>
            <CardDescription className="text-gray-300 mt-2">
              Thank you for supporting me! Every contribution helps me create more amazing content. ❤️
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <Button
              className="w-full px-6 py-3 text-white bg-gradient-to-r from-[#ff4d4d] to-[#cc0000] rounded-lg shadow-lg hover:from-[#cc0000] hover:to-[#990000] hover:shadow-[0_0_15px_rgba(255,0,0,0.8)] transition-all duration-300 flex items-center justify-center gap-2 font-poppins text-lg"
              onClick={() => window.alert("Support Button Clicked!")}
              aria-label="Support me"
            >
              <FaHeart className="w-5 h-5" /> Support Now
            </Button>
          </CardContent>
        </Card>

        {/* Message for Supporters */}
        <div className="flex flex-col font-playfair items-center justify-center bg-[#1a1a1a] rounded-xl p-6 shadow-md text-center hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl text-[#ff4d4d] mb-4 font-playfair ">
            You Make It Possible!
          </h3>
          <p className="text-gray-300 mb-6 font-playfair ">
            Your generosity fuels my creativity. Thank you for being an integral part of my journey. Together, we can achieve great things! 🌟
          </p>
          <div className="flex gap-3">
            <FaHeart className="text-[#ff4d4d] w-6 h-6 animate-bounce" />
            <FaHeart className="text-[#ff4d4d] w-6 h-6 animate-bounce" />
            <FaHeart className="text-[#ff4d4d] w-6 h-6 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  )}
</div>





            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageView1;
