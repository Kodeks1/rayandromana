package com.rayandromana.model.presentation
{
    import com.rayandromana.control.message.SetLanguageMessage;
    import com.rayandromana.model.domain.Content;

    public class HeaderPM
    {
        [MessageDispatcher]
        public var dispatcher:Function;

        [Inject]
        [Bindable]
        public var content:Content;

        public function setLang(lang:String):void
        {
            dispatcher(new SetLanguageMessage(lang));
        }
    }
}
