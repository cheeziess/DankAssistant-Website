import React from "react";
import styles from "../styles/Staff.module.css";
import StaffInfoCard from "../components/StaffInfoCard";
import StaffInfoCardMobile from "./StaffInfoCardMobile";

const StaffMain = () => {
  return (
    <div className="w-full h-full bg-[#1e1d1f] text-white p-4">
      <div
        className={`${
          styles.mainTitleLoad
        } ${"text-5xl font-bold pt-24 flex justify-center items-center flex-col"}`}
      >
        <h1 className={`${"text-[#4CAF50]"} ${styles.heading}`}>Staff</h1>
        <p className="sm:text-2xl text-xl font-semibold pt-6 text-[#878995] text-center">
          Meet the people who made Dank Assistant possible!
        </p>
      </div>
      <div className="hidden sm:block">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-8 pt-8">
          <StaffInfoCard
            name="Gingerbread2#0475"
            title="Bot Developer"
            description="A pigeon hater and a Caesium hater."
            pfp="https://cdn.discordapp.com/avatars/958188607494049792/b5e6cd7d5380e58e6fe14c3668f02714.png?size=1024"
            github="https://github.com/marcussaw123"
            spotify=""
            discordServer=""
            reddit=""
            twitch=""
            twitter=""
            instagram=""
            steam=""
            website=""
          />

          <StaffInfoCard
            name="Caesium#1775"
            title="Bot Owner"
            description="Thinks pigeons are the best birbs. Does recreational coding, studies and stalking his juniors and recording them in his free time"
            pfp="https://cdn.discordapp.com/avatars/733622933343174728/e1d7c3114b68b73f19c2f3219ac2a7b9.png?size=1024"
            github="https://github.com/CaesiumSG"
            spotify=""
            discordServer=""
            reddit=""
            twitch=""
            twitter=""
            instagram=""
            steam=""
            website=""
          />
          <StaffInfoCard
            name="Polar#7677"
            title="Bot Developer"
            description="I hope all pigeons in this world die."
            pfp="https://cdn.discordapp.com/avatars/691198774587949067/abad43a82e327c6081958fe388270b5c.png?size=1024"
            github="https://github.com/DarkTime75"
            spotify="https://open.spotify.com/user/31wuwv34euspecmb5x6gsrnbkzdu"
            discordServer="https://discord.gg/tDy3Cr6z6F"
            reddit="https://www.reddit.com/user/PolarPhoenix69"
            twitch=""
            twitter=""
            instagram=""
            steam="https://steamcommunity.com/profiles/76561199101167673"
            website=""
          />

          <StaffInfoCard
            name="ItsChris#0001"
            title="Bot Founder (retired)"
            description="This person somehow has nitro that expires on 2031 :/"
            pfp="https://cdn.discordapp.com/avatars/714777087801819237/9222cb6fb96d77bfd9b38b5be30a3541.png?size=1024"
            github=""
            spotify=""
            discordServer=""
            reddit=""
            twitch=""
            twitter=""
            instagram=""
            steam=""
            website="https://itschris.tk/"
          />

          <StaffInfoCard
            name="YARE#7917"
            title="Frontend/Web Developer"
            description="I make websites and shit"
            pfp="https://cdn.discordapp.com/avatars/784315703733387264/0341420dab147d2bf6ea53d27bf5377c.png?size=1024"
            github="https://github.com/YARE0909"
            spotify="https://open.spotify.com/user/31hedxulpckcbmi53xi44fm67loa?si=70dd8f5f083f4f9b"
            discordServer=""
            reddit=""
            twitch=""
            twitter="https://twitter.com/PradyumnaD7"
            instagram=""
            steam=""
            website="https://my-portfolio-pi-murex.vercel.app/"
          />

          <StaffInfoCard
            name="ví$h#0001"
            title="Bot Moderator"
            description="Hey, I'm vish ps: cae confessed that he is gay"
            pfp="https://cdn.discordapp.com/embed/avatars/1.png"
            github=""
            spotify="https://open.spotify.com/user/1lpp9t9vmknuvn9pxmffgl3fm"
            discordServer=""
            reddit=""
            twitch=""
            twitter="https://twitter.com/ToTheMoonPromos"
            instagram="https://instagram.com/vishrut_malhotra"
            steam=""
            website=""
          />

          <StaffInfoCard
            name="Firecracker#3077"
            title="Bot Moderator/Tester"
            description="Just a dude who knows a thing or two about python. Also a dude who likes to break stuff. Hmu if you need someone to test whatever you made :D"
            pfp="https://cdn.discordapp.com/embed/avatars/1.png"
            github=""
            spotify=""
            discordServer=""
            reddit=""
            twitch=""
            twitter=""
            instagram=""
            steam=""
            website=""
          />
        </div>
      </div>

      {/* Staff info on mobile */}
      <div className="block sm:hidden">
        <div className="grid grid-cols-1 gap-4 pt-12">
          <StaffInfoCardMobile
            name="Caesium#1775"
            title="Bot Owner"
            description="Thinks pigeons are the best birbs. Does recreational coding, studies and stalking his juniors and recording them in his free time"
            pfp="https://cdn.discordapp.com/avatars/733622933343174728/e1d7c3114b68b73f19c2f3219ac2a7b9.png?size=1024"
            github="https://github.com/CaesiumSG"
            spotify=""
            discordServer=""
            reddit=""
            twitch=""
            twitter=""
            instagram=""
            steam=""
            website=""
          />
          <StaffInfoCardMobile
            name="ItsChris#0001"
            title="Bot Founder (retired)"
            description="This person somehow has infinite nitro"
            pfp="https://cdn.discordapp.com/avatars/714777087801819237/9222cb6fb96d77bfd9b38b5be30a3541.png?size=1024"
            github=""
            spotify=""
            discordServer=""
            reddit=""
            twitch=""
            twitter=""
            instagram=""
            steam=""
            website="https://itschris.tk/"
          />
          <StaffInfoCardMobile
            name="Polar#7677"
            title="Bot Developer"
            description="Uses E-Giant mirror 5 spell deck, certified gaybo"
            pfp="https://cdn.discordapp.com/avatars/691198774587949067/abad43a82e327c6081958fe388270b5c.png?size=1024"
            github="https://github.com/DarkTime75"
            spotify="https://open.spotify.com/user/31wuwv34euspecmb5x6gsrnbkzdu"
            discordServer="https://discord.gg/tDy3Cr6z6F"
            reddit="https://www.reddit.com/user/PolarPhoenix69"
            twitch=""
            twitter=""
            instagram=""
            steam="https://steamcommunity.com/profiles/76561199101167673"
            website=""
          />
          <StaffInfoCardMobile
            name="Gingerbread2#0475"
            title="Bot Developer"
            description="A pigeon hater and a Caesium hater."
            pfp="https://cdn.discordapp.com/avatars/958188607494049792/b5e6cd7d5380e58e6fe14c3668f02714.png?size=1024"
            github="https://github.com/marcussaw123"
            spotify=""
            discordServer=""
            reddit=""
            twitch=""
            twitter=""
            instagram=""
            steam=""
            website=""
          />
          <StaffInfoCardMobile
            name="YARE#7917"
            title="Frontend/Web Developer"
            description="I make websites and shit"
            pfp="https://cdn.discordapp.com/avatars/784315703733387264/0341420dab147d2bf6ea53d27bf5377c.png?size=1024"
            github="https://github.com/YARE0909"
            spotify="https://open.spotify.com/user/31hedxulpckcbmi53xi44fm67loa?si=70dd8f5f083f4f9b"
            discordServer=""
            reddit=""
            twitch=""
            twitter="https://twitter.com/PradyumnaD7"
            instagram=""
            steam=""
            website="https://my-portfolio-pi-murex.vercel.app/"
          />
          <StaffInfoCardMobile
            name="ví$h#0001"
            title="Bot Moderator"
            description="Hey, I'm vish ps: cae confessed that he is gay"
            pfp="https://cdn.discordapp.com/embed/avatars/1.png"
            github=""
            spotify="https://open.spotify.com/user/1lpp9t9vmknuvn9pxmffgl3fm"
            discordServer=""
            reddit=""
            twitch=""
            twitter="https://twitter.com/ToTheMoonPromos"
            instagram="https://instagram.com/vishrut_malhotra"
            steam=""
            website=""
          />
          <StaffInfoCardMobile
            name="Firecracker#3077"
            title="Bot Moderator/Tester"
            description="Just a dude who knows a thing or two about python. Also a dude who likes to break stuff. Hmu if you need someone to test whatever you made :D"
            pfp="https://cdn.discordapp.com/embed/avatars/1.png"
            github=""
            spotify=""
            discordServer=""
            reddit=""
            twitch=""
            twitter=""
            instagram=""
            steam=""
            website=""
          />
        </div>
      </div>
    </div>
  );
};

export default StaffMain;
