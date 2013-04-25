package com.rayandromana.control.command
{
    import com.adobe.serialization.json.JSON;
    import com.rayandromana.control.message.SetLanguageMessage;
    import com.rayandromana.model.domain.Content;

    import flash.events.Event;

    import flash.net.URLLoader;
    import flash.net.URLRequest;

    public class SetLanguageCommand
    {
        private var jsonLoader:URLLoader;

        [Inject]
        public var content:Content;

        public function execute(message:SetLanguageMessage):void
        {
            if (message.lang == "CZ")
            {
                loadLangFile('content/locale_cs-CZ.json');
                content.currentLanguage = "CZ";
            }
            else
            {
                loadLangFile('content/locale_en-US.json');
                content.currentLanguage = "EN";
            }
        }

        private function loadLangFile(file:String):void
        {
            var myRequest:URLRequest = new URLRequest(file);
            jsonLoader = new URLLoader();
            jsonLoader.addEventListener(Event.COMPLETE, fileLoadHandler);
            jsonLoader.load(myRequest);
        }

        private function fileLoadHandler(result:Event):void
        {
            jsonLoader.removeEventListener(Event.COMPLETE, fileLoadHandler);
            var langData:Object = com.adobe.serialization.json.JSON.decode(jsonLoader.data);
            populateModel(langData);
        }

        private function populateModel(data:Object):void
        {
            content.bigDay = findKey(data as Array, "_BigDay_");
            content.greeting = findKey(data as Array, "_Greeting_");
            content.ceremony = findKey(data as Array, "_Ceremony_");
            content.ceremonyWhere = findKey(data as Array, "_CeremonyWhere_");
            content.ceremonyWhen = findKey(data as Array, "_CeremonyWhen_");
            content.ceremonyBus = findKey(data as Array, "_CeremonyBus_");
            content.reception = findKey(data as Array, "_Reception_");
            content.receptionWhere = findKey(data as Array, "_ReceptionWhere_");
            content.receptionWhen = findKey(data as Array, "_ReceptionWhen_");
            content.winetasting = findKey(data as Array, "_Winetasting_");
            content.winetastingWhere = findKey(data as Array, "_WinetastingWhere_");
            content.winetastingWhen = findKey(data as Array, "_WinetastingWhen_");
            content.winetastingLabel = findKey(data as Array, "_WinetastingLabel_");
            content.party = findKey(data as Array, "_Party_");
            content.partyWhere = findKey(data as Array, "_PartyWhere_");
            content.partyWhen = findKey(data as Array, "_PartyWhen_");
            content.partyLabel = findKey(data as Array, "_PartyLabel_");
            content.location = findKey(data as Array, "_Location_");
            content.locationSpeil = findKey(data as Array, "_LocationSpeil_");
            content.accomm = findKey(data as Array, "_Accomm_");
            content.accommSpeil = findKey(data as Array, "_AccommSpeil_");
            content.photos = findKey(data as Array, "_Photos_");
            content.czechThis = findKey(data as Array, "_CzechThis_");
            content.scrollSideways = findKey(data as Array, "_ScrollSideways_");
            content.rsvp = findKey(data as Array, "_RSVP_");
            content.guestbook = findKey(data as Array, "_Guestbook_");
            content.gifts = findKey(data as Array, "_Gifts_");
            content.contact = findKey(data as Array, "_Contact_");
            content.giftsSpeil = findKey(data as Array, "_GiftsSpeil_");
            content.photoTag = findKey(data as Array, "_PhotoTag_");
            content.photoGuide = findKey(data as Array, "_PhotoGuide_");
            content.beerTitle = findKey(data as Array, "_BeerTitle_");
            content.beerTitleShort = findKey(data as Array, "_BeerTitleShort_");
            content.beerText = findKey(data as Array, "_BeerText_");
            content.slivoTitle = findKey(data as Array, "_SlivoTitle_");
            content.slivoTitleShort = findKey(data as Array, "_SlivoTitleShort_");
            content.slivoText = findKey(data as Array, "_SlivoText_");
            content.folkloreTitle = findKey(data as Array, "_FolkloreTitle_");
            content.folkloreTitleShort = findKey(data as Array, "_FolkloreTitleShort_");
            content.folkloreText = findKey(data as Array, "_FolkloreText_");
            content.famousTitle = findKey(data as Array, "_FamousTitle_");
            content.famousTitleShort = findKey(data as Array, "_FamousTitleShort_");
            content.famousText = findKey(data as Array, "_FamousText_");
            content.castleTitle = findKey(data as Array, "_CastleTitle_");
            content.castleTitleShort = findKey(data as Array, "_CastleTitleShort_");
            content.castleText = findKey(data as Array, "_CastleText_");
            content.languageTitle = findKey(data as Array, "_LanguageTitle_");
            content.languageTitleShort = findKey(data as Array, "_LanguageTitleShort_");
            content.languageText = findKey(data as Array, "_LanguageText_");
            content.contactIntro = findKey(data as Array, "_ContactIntro_");
            content.iPhoneApp = findKey(data as Array, "_IPhoneApp_");
        }

        private function findKey(data:Array, key:String):String
        {
            if (!data) return "";

            for (var i:int = 0; i < data.length; i++)
            {
                if (data[i].key == key)
                {
                    return data[i].value;
                }
            }

            return "";
        }
    }
}
