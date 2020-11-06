<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis version="3.2.2-Bonn" maxScale="0" minScale="1e+8" hasScaleBasedVisibilityFlag="0">
  <pipe>
    <rasterrenderer type="singlebandpseudocolor" classificationMin="0" band="1" opacity="1" classificationMax="3.2" alphaBand="-1">
      <rasterTransparency/>
      <minMaxOrigin>
        <limits>None</limits>
        <extent>WholeRaster</extent>
        <statAccuracy>Estimated</statAccuracy>
        <cumulativeCutLower>0.02</cumulativeCutLower>
        <cumulativeCutUpper>0.98</cumulativeCutUpper>
        <stdDevFactor>2</stdDevFactor>
      </minMaxOrigin>
      <rastershader>
        <colorrampshader classificationMode="1" colorRampType="INTERPOLATED" clip="0">
          <colorramp type="gradient" name="[source]">
            <prop k="color1" v="43,131,186,255"/>
            <prop k="color2" v="215,25,28,255"/>
            <prop k="discrete" v="0"/>
            <prop k="rampType" v="gradient"/>
            <prop k="stops" v="0.25;171,221,164,255:0.5;255,255,191,255:0.75;253,174,97,255"/>
          </colorramp>
          <item value="0" alpha="255" color="#2b83ba" label="0"/>
          <item value="0.8" alpha="255" color="#abdda4" label="0.8"/>
          <item value="1.6" alpha="255" color="#ffffbf" label="1.6"/>
          <item value="2.4" alpha="255" color="#fdae61" label="2.4"/>
          <item value="3.2" alpha="255" color="#d7191c" label="3.2"/>
        </colorrampshader>
      </rastershader>
    </rasterrenderer>
    <brightnesscontrast brightness="4" contrast="0"/>
    <huesaturation saturation="0" grayscaleMode="0" colorizeOn="0" colorizeRed="255" colorizeStrength="100" colorizeBlue="128" colorizeGreen="128"/>
    <rasterresampler maxOversampling="2"/>
  </pipe>
  <blendMode>0</blendMode>
</qgis>
