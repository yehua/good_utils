//document.write("getxiami23dd");
/*
var greeting = "hola, ";
var button = document.getElementById("mybutton");
button.person_name = "Roberto";
button.addEventListener("click", function() {
  alert(greeting + button.person_name + ".");
}, false);
*/
function hack(){
        cc = 1;
        printtxt = [];

        //out = window.open('','歌词窗口','width=255,height=366,status=no,resizable=no');
        //artist_name = document.getElementById("title").innerText;
	artist_name = document.getElementById("album_info").getElementsByTagName("td")[1].innerText;
        image = document.getElementById("cover_lightbox").getElementsByTagName("img"); 
        image_src = image[0].getAttribute("src"); 
        image_alt = image[0].getAttribute("alt"); 
	art_elem = document.getElementById("album_intro");
	art_info = "专辑介绍：暂空";	
	if (art_elem){
		art_info = art_elem.innerText;	
		art_info = art_info.replace(new RegExp('\n','g'), '<br>');
	}
	//art_info = art_info.replace(/(\r\n|\n|\r)/gm,"<br>");
	art_songcount = 0;
	printtxt.push('---\nlayout: minge\nkeyword: 陕北民歌 \ntags: \ntitle: ' + artist_name + '\n---');
	printtxt.push('\n<script>\n\
        artist_t = {};\n\
        album_t = {};\n\
        disc_t = {};\n\
        song_t = {};\n\
        artist_t.id = "";\n\
        artist_t.name = "' + artist_name + '";\n\
        artist_t.image = ["' + image_src + '","' + image_alt + '"];\n\
	artist_t.des = \'' + art_info + '\';\n\
        artist_t.albumlist = [];\n');

        albums = document.getElementsByClassName("album_item100_block");
        //for(i=0;i<albums.length;i++){
        for(i=0;i<1;i++){
                albumx = "album-" + i;
                albumn =  document.getElementById("title").innerText;
		albumn = albumn.replace(new RegExp('\n','g'), '<br>');
                printtxt.push('\n\n\n\
                album_t.id = "' + albumx + '";\n\
                album_t.name = "' + albumn + '"\n\
                album_t.disclist = [];');

                tracks = document.getElementById("track").getElementsByClassName("trackname");
                if (tracks.length == 0 ){console.log(artist_name + " track is NULL." + "\n");continue};
                track_count = tracks.length;
                track_name = tracks[0].innerText;

                discs = document.getElementById("track").getElementsByTagName("table");
                if (discs.length == 0 ){console.log(artist_name + ">" + track_name +  " is NULL." + "\n");continue;};
                console.log(artist_name + ">" + track_name +  "count:" + discs.length + "\n");
                //for every exsit disc
                for(j=0;j<discs.length;j++){
                        discx = "disc-" + j;
                        printtxt.push('\n\n\
                        disc_t.id = "' + discx + '"\n\
                        disc_t.songlist = [];');
                        disc = discs[j];
                        trs = disc.getElementsByTagName("tr");
                        song_count = trs.length;
                        if (trs.length == 0 ){console.log(artist_name + ">" + track_name + ">tables" + (j+1) +  " is NULL." + "\n");continue;};
                        console.log(artist_name + ">" + track_name + ">tables" + (j+1) +  " Song:" + song_count + "\n");
                        //one <tr> contain one song
                        for(h=0;h<trs.length;h++){
                                tr = trs[h];
                                td = tr.getElementsByClassName("song_name"); 
                                td1 = td[0];
                                a = td1.getElementsByTagName("a");
                                a1 = a[0];

                                song_url = a1.getAttribute("href"); 
                                tmp = song_url.split("/");
                                index = tmp.length - 1;
				lrc_str = "NULL";
				art_songcount++;
/*
                                lrc_win = window.open(song_url,'歌词窗口','width=255,height=366,status=no,resizable=no');
				win = window.open('u/0/sent','blank',''); win.onload = function(){ win.alert('ok'); }; 
				while(lrc_win.document.readyState != "complete"){}
                                lrc_block = lrc_win.document.getElementById("lrc");
                                lrc_main = lrc_block.getElementsByClassName("lrc_main")[0];
                                if (lrc_main+"" == "undefined"){
                                        lrc_str = "NULL";
                                }else{
                                        orig = lrc_main.innerText;
                                        orig_split = orig.split("编辑人");
                                        lrc_str = orig_split[0];
				}
*/
				printtxt.push('\n\
						song_t.name = "' + a1.innerText + '";\
                                song_t.id = "' + tmp[index] + '";\
                                song_t.lrc = "' + lrc_str + '";');
                                console.log("XXXXXXXXXXXXXXXXXX----"+cc++);
				//lrc_win.close();
                                printtxt.push('disc_t.songlist.push(song_t);\
				song_t = new Object();');
                        }
                        printtxt.push('\nalbum_t.disclist.push(disc_t);disc_t = new Object();');
                }
                printtxt.push('\nartist_t.albumlist.push(album_t);album_t = new Object();');
        }
	printtxt.push('\n</script>');
	outdata = "";
	for(gg=0;gg<printtxt.length;gg++){
		//out.document.write(printtxt[gg]);
		outdata = outdata + printtxt[gg];
	}
	var data = "data:x-application/text,"+encodeURIComponent(outdata);
	window.open(data);
} //@ sourceURL=3dd.js
function hack2(){
	var BlobBuilder = BlobBuilder || WebKitBlobBuilder || MozBlobBuilder;
	var URL = URL || webkitURL || window;

	function saveAs(blob, filename) {
	    var type = blob.type;
	    var force_saveable_type = 'application/octet-stream';
	    if (type && type != force_saveable_type) { // 强制下载，而非在浏览器中打开
		var slice = blob.slice || blob.webkitSlice || blob.mozSlice;
		blob = slice.call(blob, 0, blob.size, force_saveable_type);
	    }

	    var url = URL.createObjectURL(blob);
	    var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
	    save_link.href = url;
	    save_link.download = filename;

	    var event = document.createEvent('MouseEvents');
	    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	    save_link.dispatchEvent(event);
	    URL.revokeObjectURL(url);
	}

	var bb = new BlobBuilder;
	bb.append('Hello, world!');
	saveAs(bb.getBlob('text/plain;charset=utf-8'), 'hello world.txt');
}
di = document.getElementById("album_rank");
var bu = document.createElement("button");
bu.innerText= " Start Hack...";
bu.setAttribute("id","hack");
//bu.setAttribute("onclick","hack()");
di.appendChild(bu);

nebu = document.getElementById("hack");
nebu.addEventListener("click", hack,false);
