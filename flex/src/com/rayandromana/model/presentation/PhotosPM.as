package com.rayandromana.model.presentation
{
    import com.rayandromana.control.message.LoadPhotosMessage;
    import com.rayandromana.model.domain.Content;

    public class PhotosPM
    {
        [MessageDispatcher]
        public var dispatcher:Function;

        [Inject]
        [Bindable]
        public var content:Content;

        [Init]
        public function init():void
        {
            loadPhotos();
        }

        private function loadPhotos():void
        {
            dispatcher(new LoadPhotosMessage());
        }

    }
}
