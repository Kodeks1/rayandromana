package com.rayandromana.model.presentation
{
    import com.rayandromana.control.message.SetLanguageMessage;
    import com.rayandromana.model.domain.Content;

    public class ApplicationPM
    {
        public static const DEFAULT_LANGUAGE:String = 'EN';

        [MessageDispatcher]
        public var dispatcher:Function;

        [Inject]
        [Bindable]
        public var content:Content;

        [Init]
        public function init():void
        {
            loadContent();
        }

        private function loadContent():void
        {
            dispatcher(new SetLanguageMessage(DEFAULT_LANGUAGE));
        }

    }
}
