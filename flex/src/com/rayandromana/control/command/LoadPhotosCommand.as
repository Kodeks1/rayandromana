package com.rayandromana.control.command
{
    import com.adobe.serialization.json.JSON;
    import com.rayandromana.control.message.LoadPhotosMessage;
    import com.rayandromana.model.domain.Content;
    import com.rayandromana.model.domain.Photo;

    import flash.events.Event;

    import flash.net.URLLoader;
    import flash.net.URLRequest;

    import mx.collections.ArrayList;

    public class LoadPhotosCommand
    {
        private var jsonLoader:URLLoader;

        [Inject]
        public var content:Content;

        public function execute(message:LoadPhotosMessage):void
        {
            var jsonRequest:URLRequest = new URLRequest('content/photos.json');
            jsonLoader = new URLLoader();
            jsonLoader.addEventListener(Event.COMPLETE, fileLoadHandler);
            jsonLoader.load(jsonRequest);
        }

        private function fileLoadHandler(result:Event):void
        {
            jsonLoader.removeEventListener(Event.COMPLETE, fileLoadHandler);
            var langData:Object = com.adobe.serialization.json.JSON.decode(jsonLoader.data);
            var pics:Array = [];

            for (var i:int = 0; i < langData.length; i++)
            {
                var photo:Photo = new Photo();
                photo.id = langData[i].id;
                photo.thumbsrc = langData[i].thumbsrc;
                photo.largesrc = langData[i].largesrc;
                photo.title = langData[i].title;
                photo.description = langData[i].description;
                photo.link = langData[i].link;

                pics.push(photo);
            }

            content.photosCollection = new ArrayList(pics);
        }
    }
}
