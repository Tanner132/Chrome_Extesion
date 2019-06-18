

chrome.tabs.onCreated(function(tabs) {
    chrome.tabs.query({}, (tabs)=>{
        var found = false;
        for(i = 0; i < tabs.length; i++){
            if(/https?:\/\/www\.netflix\.com/.test(tabs[i].url)){
                found = true;
                chrome.tabs.update(tabs[i].id,{url: 'https://www.youtube.com/watch?v=PpccpglnNf0'});
                break;
            }
        }
        if(!found){
            chrome.tabs.create({url: 'https://www.youtube.com/watch?v=PpccpglnNf0'})
        }
    })
    
   })