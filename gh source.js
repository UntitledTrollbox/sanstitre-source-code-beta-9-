const he = require("he")
const io = require("socket.io-client");
const socket = io("https://www.windows93.net:8086", {
	forceNew: true,
	transportOptions: {
		polling: {
			extraHeaders: {
				"Accept": "*/*",
				"Accept-Encoding": "identity",
				"Accept-Language": "*",
				"Cache-Control": "no-cache",
				"Connection": "keep-alive",
				"Cookie": "",
				"Host": "www.windows93.net",
				"Origin": "http://www.windows93.net",
				"Pragma": "no-cache",
				"Referer": 'http://www.windows93.net/trollbox/index.php',
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36"
			}
		}
	}
});

        socket.emit("user joined", "sansTitre [gh!]", "#ff66ff", "", "");

        socket.on("message", function(data) {

            if (data.msg == "hello") {
                socket.send(he.decode("hello "+data.nick+""))
            }

            if (data.msg == "hi") {
                socket.send(he.decode("hi "+data.nick+""))
            }
            if (data.msg == "gh!help") {
                socket.send(he.decode("sanstitre, literally a user index\nversion - beta 9\ngh!untitled - creator of the bot\ngh!qpfm - cute bot :3\ngh!hain - maker of cute bot :3\ngh!word - trigger applevinyl's word command thingy\ngh!mage - tb og\npage 1/4\ndo gh!help <page number> for page"))
            }
            if (data.msg == "gh!help 2") {
                socket.send(he.decode("gh!flapplin - nice bot\ngh!bensav - silly guy\ngh!applevinyl - qpfm's husband\ngh!big - bigweirdo\ngh!harje - brazillian guy\npage 2/4\ndo gh!help <page number> for page"))
            }
            if (data.msg == "gh!help 3") {
                socket.send(he.decode("gh!rnpg - generate a random polygon from 1 to 100 using scarbot\ngh!ar - we do not talk about him.\ngh!dell - master coder\ngh!wowaka - hain's favorite vocaloid producer\ngh!rng - a random random generator from 1 to 255 (255 - win)\npage 3/4\ndo gh!help <page number> for page"))
            }
            if (data.msg == "gh!help 4") {
                socket.send(he.decode("gh!kurt - just kurt\ngh!miweoro - miweoro himself asked me to add this\ngh!econbot - the best economy bot\ngh!event - get news about sanstitre\npage 4/4\ndo gh!help <page number> for page"))
            }
            if (data.msg == "gh!qpfm") {
                socket.send(he.decode("cute bot :3"))
            }
            if (data.msg == "gh!untitled") {
                socket.send(he.decode("he made me, BOTU, TBB scripts and BTPOT"))
            }
            if (data.msg == "gh!hain") {
                socket.send(he.decode("maker of the cute bot :3"))
            }
            if (data.msg == "gh!word") {
                socket.send(he.decode("{:word}"))
            }
            if (data.msg == "gh!mage") {
                socket.send(he.decode("trollbox og, was on trollbox since 2017"))
            }
            if (data.msg == "gh!flapplin") {
                socket.send(he.decode("one time he was a copy of nyfelnix/xeonix, now a nice bot"))
            }
            if (data.msg == "gh!bensav") {
                socket.send(he.decode("silly user"))
            }
            if (data.msg == "gh!applevinyl") {
                socket.send(he.decode("silly user's bot and also qpfm's husband"))
            }
            if (data.msg == "gh!big") {
                socket.send(he.decode("another trollbox og, since 2019"))
            }
            if (data.msg == "gh!harje") {
                socket.send(he.decode("brazillian osc fan that made TBB"))
            }
            if (data.msg == "gh!rnpg") {
                socket.send("&polygon " + Math.floor(Math.random() * 100))
            }
            if (data.msg == "gh!ar") {
                socket.send(he.decode("we do not talk about him."))
            }
            if (data.msg == "gh!dell") {
                socket.send(he.decode("master coder according to the untitleded wiki"))
            }
            if (data.msg == "gh!wowaka") {
                socket.send(he.decode("hain's favorite vocaloid producer"))
            }
            if (data.msg == "gh!rng") {
                socket.send("your number is: " + Math.floor(Math.random() * 255))
            }
            if (data.msg == "how old are you") {
                socket.send(he.decode("omg guys "+data.nick+" is a creep now whar"))
            }
            if (data.msg == "gh!kurt") {
                socket.send(he.decode("just kurt"))
            }
            if (data.msg == "gh!miweoro") {
                socket.send(he.decode("made the second best economy bot"))
            }
            if (data.msg == "gh!econbot") {
                socket.send(he.decode("the best ecenomy bot, especially the event that's going on"))
            }
            if (data.msg == "gh!event") {
                socket.send(he.decode("NEW EVENT! christmas updates!!\nnow, updates for sanstitre will be more frequent\nthat's all about the event, for now..."))
            }
            })