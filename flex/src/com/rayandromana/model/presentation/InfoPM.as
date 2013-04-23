package com.rayandromana.model.presentation
{
    import com.rayandromana.model.domain.Content;
    import com.rayandromana.view.popup.ContactPopup;
    import com.rayandromana.view.popup.GiftPopup;

    import flash.display.DisplayObject;
    import flash.net.URLRequest;
    import flash.net.navigateToURL;

    import mx.core.FlexGlobals;

    import mx.managers.PopUpManager;

    import org.spicefactory.parsley.core.context.Context;

    public class InfoPM
    {
        [Inject]
        public var context:Context;

        [Inject]
        [Bindable]
        public var content:Content;

        public function launchGiftsPopup():void
        {
            var popup:GiftPopup = new GiftPopup();
            context.viewManager.addViewRoot(popup);
            PopUpManager.addPopUp(popup, FlexGlobals.topLevelApplication as DisplayObject, true);
            PopUpManager.centerPopUp(popup);
        }

        public function launchContactPopup():void
        {
            var popup:ContactPopup = new ContactPopup();
            context.viewManager.addViewRoot(popup);
            PopUpManager.addPopUp(popup, FlexGlobals.topLevelApplication as DisplayObject, true);
            PopUpManager.centerPopUp(popup);
        }

        public function gotoRsvp():void
        {
            var urlRequest:URLRequest = new URLRequest("http://www.mywedding.com/apps/public/mysite/rsvp.php?s=rayandromana");
            navigateToURL(urlRequest, '_blank');
        }

        public function gotoGuestbook():void
        {
            var urlRequest:URLRequest = new URLRequest("http://www.mywedding.com/apps/public/mysite/guestbook_sign.php?s=rayandromana");
            navigateToURL(urlRequest, '_blank');
        }
    }
}
