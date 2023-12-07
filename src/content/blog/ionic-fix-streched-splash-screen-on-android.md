---
draft: false
title: "Ionic - Fix stretched splash screen on Android"
snippet: "How to fix the stretched splash screen on Android when using Ionic/Capacitor"
image: {
    alt: "Person holding a phone next to a laptop",
    src: "https://images.unsplash.com/photo-1542641728-6ca359b085f4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
publishDate: "2023-12-06 10:13"
category: "Tutorials"
author: "Kashan Ahmad"
tags: [ionic, android, hybrid, capacitor, splash-screen]
---

I've been digging into Ionic and Capacitor for a while now and I've been loving it. I've been working on a project that uses Ionic and Capacitor to build a hybrid app for Android and iOS. Too many "I've been"s eh? I know. Anyway, just when I thought I was done with the project, I noticed that the splash screen on Android was stretched. At first, I thought it might be the asset I was placing in the `resources` folder. But it wasn't. So, I digged around the forums and found a solution. I thought I'd share it here just in case someone else is having the same issue, or if I ever need to look it up again.

## Nuajan, the savior

This guy [Nuajan](https://github.com/Nuajan) saved the day. He posted a solution on the [Ionic forum](https://github.com/ionic-team/capacitor/issues/1627#issuecomment-633693708) that worked like a good jug of beer 🍺. You just gotta add this bit to the `styles.xml` file in place of the default splash screen style. Don't remove the 'Base Application Theme' style though. Know what, I'll show you the whole file. Just replace the whole thing with this:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<resources>
    <!-- Base application theme. -->
    <style name="AppTheme" parent="Theme.AppCompat.Light.DarkActionBar">
        <!-- Customize your theme here. -->
        <item name="colorPrimary">@color/colorPrimary</item>
        <item name="colorPrimaryDark">@color/colorPrimaryDark</item>
        <item name="colorAccent">@color/colorAccent</item>
    </style>

    <style
    name="AppTheme.NoActionBar"
    parent="Theme.AppCompat.DayNight.NoActionBar"
  >
        <item name="windowActionBar">false</item>
        <item name="windowNoTitle">true</item>
        <item name="android:background">@null</item>
    </style>


    <style name="AppTheme.NoActionBarLaunch" parent="AppTheme.NoActionBar">
        <item name="android:windowNoTitle">true</item>
        <item name="android:windowActionBar">false</item>
        <item name="android:windowFullscreen">true</item>
        <item name="android:windowContentOverlay">@null</item>
        <item name="android:windowIsTranslucent">true</item>
    </style>
</resources>
```

## What's happening here?

The `AppTheme.NoActionBarLaunch` style is the one that's doing the magic. It's setting the `android:windowFullscreen` to `false` which is what's causing the splash screen to stretch. So, we just set it to `true` and we're good to go. I hope this helps someone out there. Cheers! 🍻

## References

- [Ionic forum](https://github.com/ionic-team/capacitor/issues/)
- [Nuajan's comment](https://github.com/ionic-team/capacitor/issues/1627#issuecomment-633693708)
- [Ionic docs](https://ionicframework.com/docs/)
- [Capacitor docs](https://capacitorjs.com/docs)
