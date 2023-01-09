'Set Context for the browser window invoked
AIUtil.SetContext Window("regexpwndtitle:=Google Chrome", "regexpwndclass:=Chrome_WidgetWin_1", "is owned window:=False", "is child window:=False")
'Click the profile
AIUtil("profile", micAnyText, micFromBottom, 1).Click
'Enter user name and password
AIUtil("input", "Username").Type "admin"
AIUtil("input", "Password").TypeSecure "63bc208990db493bfc"
'Click Signin button
AIUtil("button", "SIGN IN").Click
'Enter 17t keyword and click on search
AIUtil("search", micAnyText, micFromBottom, 1).Search "17t"
'Click on Close(X) button
AIUtil("close", micAnyText, micFromBottom, 1).Click
'Click Laptop name with "HP ENVY - 17t Touch"
AIUtil.FindTextBlock("HP ENVY - 17t Touch").Click
'Click on "ADD TO CART" button
AIUtil("button", "ADD TO CART").Click
'Click on the Shopping_Cart icon
AIUtil("shopping_cart").Click
'Click on "REMOVE" text to remove the item from cart
AIUtil.FindTextBlock("REMOVE", micFromTop, 1).Click
'Click the profile
AIUtil("profile", micAnyText, micFromBottom, 1).Click
'Click "sign out"
AIUtil.FindTextBlock("sign out").Click

