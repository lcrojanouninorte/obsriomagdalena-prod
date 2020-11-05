<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis readOnly="0" labelsEnabled="1" version="3.2.2-Bonn" maxScale="0" simplifyDrawingTol="1" simplifyLocal="1" simplifyMaxScale="1" minScale="1e+8" hasScaleBasedVisibilityFlag="0" simplifyDrawingHints="1" simplifyAlgorithm="0">
  <renderer-v2 type="RuleRenderer" enableorderby="0" symbollevels="0" forceraster="0">
    <rules key="{86d1ae1f-257a-4e51-ac56-ca41630fffa9}">
      <rule key="{d7b68ca8-2022-43d1-8f86-724901e08aa1}" filter=" &quot;Shape_Area&quot; >20000000" label="Grandes" checkstate="0" symbol="0"/>
      <rule key="{899f0fe7-a544-45c9-9df0-6d78086c62a6}" filter=" &quot;Shape_Area&quot; >5000000" label="TODAS" checkstate="0" symbol="1"/>
    </rules>
    <symbols>
      <symbol type="fill" name="0" alpha="1" clip_to_extent="1">
        <layer enabled="1" class="LinePatternFill" locked="0" pass="0">
          <prop k="angle" v="135"/>
          <prop k="color" v="55,126,184,255"/>
          <prop k="distance" v="2"/>
          <prop k="distance_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="distance_unit" v="MM"/>
          <prop k="line_width" v="0.26"/>
          <prop k="line_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="line_width_unit" v="MM"/>
          <prop k="offset" v="0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="outline_width_unit" v="MM"/>
          <data_defined_properties>
            <Option type="Map">
              <Option type="QString" name="name" value=""/>
              <Option name="properties"/>
              <Option type="QString" name="type" value="collection"/>
            </Option>
          </data_defined_properties>
          <symbol type="line" name="@0@0" alpha="1" clip_to_extent="1">
            <layer enabled="1" class="SimpleLine" locked="0" pass="0">
              <prop k="capstyle" v="square"/>
              <prop k="customdash" v="5;2"/>
              <prop k="customdash_map_unit_scale" v="3x:0,0,0,0,0,0"/>
              <prop k="customdash_unit" v="MM"/>
              <prop k="draw_inside_polygon" v="0"/>
              <prop k="joinstyle" v="bevel"/>
              <prop k="line_color" v="15,131,255,255"/>
              <prop k="line_style" v="solid"/>
              <prop k="line_width" v="0.1"/>
              <prop k="line_width_unit" v="MM"/>
              <prop k="offset" v="0"/>
              <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
              <prop k="offset_unit" v="MM"/>
              <prop k="use_custom_dash" v="0"/>
              <prop k="width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
              <data_defined_properties>
                <Option type="Map">
                  <Option type="QString" name="name" value=""/>
                  <Option name="properties"/>
                  <Option type="QString" name="type" value="collection"/>
                </Option>
              </data_defined_properties>
            </layer>
          </symbol>
        </layer>
        <layer enabled="1" class="SimpleFill" locked="0" pass="0">
          <prop k="border_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="color" v="0,0,0,255"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="15,131,255,255"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0.26"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="no"/>
          <data_defined_properties>
            <Option type="Map">
              <Option type="QString" name="name" value=""/>
              <Option name="properties"/>
              <Option type="QString" name="type" value="collection"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
      <symbol type="fill" name="1" alpha="1" clip_to_extent="1">
        <layer enabled="1" class="SimpleFill" locked="0" pass="0">
          <prop k="border_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="color" v="193,229,255,255"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="55,126,184,255"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0.26"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
          <data_defined_properties>
            <Option type="Map">
              <Option type="QString" name="name" value=""/>
              <Option name="properties"/>
              <Option type="QString" name="type" value="collection"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
    </symbols>
  </renderer-v2>
  <labeling type="rule-based">
    <rules key="">
      <rule key="" description="Cienagas_grandes" filter=" &quot;Shape_Area&quot; >45000000">
        <settings>
          <text-style previewBkgrdColor="#000000" fontSizeMapUnitScale="3x:0,0,0,0,0,0" fontWeight="50" fontFamily="MS Shell Dlg 2" fontLetterSpacing="0" blendMode="0" fontSize="10" fontWordSpacing="0" fontUnderline="0" isExpression="0" namedStyle="Normal" fontSizeUnit="Point" fontItalic="0" fontStrikeout="0" textOpacity="0.9" fontCapitals="0" textColor="57,143,255,255" useSubstitutions="0" multilineHeight="1" fieldName="NOMBRE_GEO">
            <text-buffer bufferBlendMode="0" bufferSizeMapUnitScale="3x:0,0,0,0,0,0" bufferSize="1" bufferDraw="0" bufferSizeUnits="MM" bufferColor="255,255,255,255" bufferOpacity="1" bufferJoinStyle="128" bufferNoFill="1"/>
            <background shapeOffsetUnit="MM" shapeOpacity="1" shapeRadiiUnit="MM" shapeSizeY="0" shapeRadiiMapUnitScale="3x:0,0,0,0,0,0" shapeOffsetX="0" shapeFillColor="255,255,255,255" shapeSizeUnit="MM" shapeSizeMapUnitScale="3x:0,0,0,0,0,0" shapeBorderColor="128,128,128,255" shapeRadiiX="0" shapeBorderWidthUnit="MM" shapeSizeType="0" shapeOffsetY="0" shapeDraw="0" shapeBlendMode="0" shapeOffsetMapUnitScale="3x:0,0,0,0,0,0" shapeRotation="0" shapeBorderWidth="0" shapeRadiiY="0" shapeType="0" shapeSVGFile="" shapeJoinStyle="64" shapeRotationType="0" shapeSizeX="0" shapeBorderWidthMapUnitScale="3x:0,0,0,0,0,0"/>
            <shadow shadowOpacity="0.7" shadowRadiusAlphaOnly="0" shadowRadiusUnit="MM" shadowDraw="0" shadowBlendMode="6" shadowOffsetAngle="135" shadowOffsetGlobal="1" shadowRadiusMapUnitScale="3x:0,0,0,0,0,0" shadowOffsetUnit="MM" shadowRadius="1.5" shadowScale="100" shadowOffsetDist="1" shadowUnder="0" shadowColor="0,0,0,255" shadowOffsetMapUnitScale="3x:0,0,0,0,0,0"/>
            <substitutions/>
          </text-style>
          <text-format addDirectionSymbol="0" formatNumbers="0" reverseDirectionSymbol="0" wrapChar=" " multilineAlign="1" leftDirectionSymbol="&lt;" placeDirectionSymbol="0" decimals="3" rightDirectionSymbol=">" plussign="0"/>
          <placement fitInPolygonOnly="0" quadOffset="4" maxCurvedCharAngleOut="-25" predefinedPositionOrder="TR,TL,BR,BL,R,L,TSR,BSR" rotationAngle="0" placementFlags="10" labelOffsetMapUnitScale="3x:0,0,0,0,0,0" distUnits="MM" centroidWhole="0" repeatDistanceUnits="MM" preserveRotation="1" priority="5" offsetUnits="MM" xOffset="0" offsetType="0" yOffset="0" distMapUnitScale="3x:0,0,0,0,0,0" repeatDistance="0" dist="0" placement="0" centroidInside="1" maxCurvedCharAngleIn="25" repeatDistanceMapUnitScale="3x:0,0,0,0,0,0"/>
          <rendering mergeLines="0" obstacleFactor="0.98" limitNumLabels="0" obstacleType="0" obstacle="1" zIndex="0" labelPerPart="0" displayAll="0" fontMaxPixelSize="10000" drawLabels="1" maxNumLabels="2000" scaleMax="0" fontLimitPixelSize="0" scaleVisibility="0" upsidedownLabels="0" minFeatureSize="0" scaleMin="0" fontMinPixelSize="3"/>
          <dd_properties>
            <Option type="Map">
              <Option type="QString" name="name" value=""/>
              <Option name="properties"/>
              <Option type="QString" name="type" value="collection"/>
            </Option>
          </dd_properties>
        </settings>
      </rule>
      <rule key="" description="TODAS" filter=" &quot;Shape_Area&quot; >5000000" active="0">
        <settings>
          <text-style previewBkgrdColor="#000000" fontSizeMapUnitScale="3x:0,0,0,0,0,0" fontWeight="50" fontFamily="MS Shell Dlg 2" fontLetterSpacing="0" blendMode="0" fontSize="10" fontWordSpacing="0" fontUnderline="0" isExpression="0" namedStyle="Normal" fontSizeUnit="Point" fontItalic="0" fontStrikeout="0" textOpacity="1" fontCapitals="0" textColor="0,0,0,255" useSubstitutions="0" multilineHeight="1" fieldName="NOMBRE_GEO">
            <text-buffer bufferBlendMode="0" bufferSizeMapUnitScale="3x:0,0,0,0,0,0" bufferSize="1" bufferDraw="0" bufferSizeUnits="MM" bufferColor="255,255,255,255" bufferOpacity="1" bufferJoinStyle="128" bufferNoFill="1"/>
            <background shapeOffsetUnit="MM" shapeOpacity="1" shapeRadiiUnit="MM" shapeSizeY="0" shapeRadiiMapUnitScale="3x:0,0,0,0,0,0" shapeOffsetX="0" shapeFillColor="255,255,255,255" shapeSizeUnit="MM" shapeSizeMapUnitScale="3x:0,0,0,0,0,0" shapeBorderColor="128,128,128,255" shapeRadiiX="0" shapeBorderWidthUnit="MM" shapeSizeType="0" shapeOffsetY="0" shapeDraw="0" shapeBlendMode="0" shapeOffsetMapUnitScale="3x:0,0,0,0,0,0" shapeRotation="0" shapeBorderWidth="0" shapeRadiiY="0" shapeType="0" shapeSVGFile="" shapeJoinStyle="64" shapeRotationType="0" shapeSizeX="0" shapeBorderWidthMapUnitScale="3x:0,0,0,0,0,0"/>
            <shadow shadowOpacity="0.7" shadowRadiusAlphaOnly="0" shadowRadiusUnit="MM" shadowDraw="0" shadowBlendMode="6" shadowOffsetAngle="135" shadowOffsetGlobal="1" shadowRadiusMapUnitScale="3x:0,0,0,0,0,0" shadowOffsetUnit="MM" shadowRadius="1.5" shadowScale="100" shadowOffsetDist="1" shadowUnder="0" shadowColor="0,0,0,255" shadowOffsetMapUnitScale="3x:0,0,0,0,0,0"/>
            <substitutions/>
          </text-style>
          <text-format addDirectionSymbol="0" formatNumbers="0" reverseDirectionSymbol="0" wrapChar=" " multilineAlign="1" leftDirectionSymbol="&lt;" placeDirectionSymbol="0" decimals="3" rightDirectionSymbol=">" plussign="0"/>
          <placement fitInPolygonOnly="0" quadOffset="4" maxCurvedCharAngleOut="-25" predefinedPositionOrder="TR,TL,BR,BL,R,L,TSR,BSR" rotationAngle="0" placementFlags="10" labelOffsetMapUnitScale="3x:0,0,0,0,0,0" distUnits="MM" centroidWhole="1" repeatDistanceUnits="MM" preserveRotation="1" priority="5" offsetUnits="MM" xOffset="0" offsetType="0" yOffset="0" distMapUnitScale="3x:0,0,0,0,0,0" repeatDistance="0" dist="0" placement="0" centroidInside="1" maxCurvedCharAngleIn="25" repeatDistanceMapUnitScale="3x:0,0,0,0,0,0"/>
          <rendering mergeLines="0" obstacleFactor="1" limitNumLabels="0" obstacleType="0" obstacle="1" zIndex="0" labelPerPart="0" displayAll="0" fontMaxPixelSize="10000" drawLabels="1" maxNumLabels="2000" scaleMax="0" fontLimitPixelSize="0" scaleVisibility="0" upsidedownLabels="0" minFeatureSize="0" scaleMin="0" fontMinPixelSize="3"/>
          <dd_properties>
            <Option type="Map">
              <Option type="QString" name="name" value=""/>
              <Option name="properties"/>
              <Option type="QString" name="type" value="collection"/>
            </Option>
          </dd_properties>
        </settings>
      </rule>
    </rules>
  </labeling>
  <customproperties>
    <property key="dualview/previewExpressions" value="OBJECTID"/>
    <property key="embeddedWidgets/count" value="0"/>
    <property key="variableNames"/>
    <property key="variableValues"/>
  </customproperties>
  <blendMode>0</blendMode>
  <featureBlendMode>0</featureBlendMode>
  <layerOpacity>1</layerOpacity>
  <SingleCategoryDiagramRenderer diagramType="Histogram" attributeLegend="1">
    <DiagramCategory backgroundColor="#ffffff" lineSizeScale="3x:0,0,0,0,0,0" opacity="1" rotationOffset="270" minScaleDenominator="0" maxScaleDenominator="1e+8" penAlpha="255" scaleBasedVisibility="0" sizeType="MM" scaleDependency="Area" width="15" penColor="#000000" height="15" backgroundAlpha="255" penWidth="0" enabled="0" labelPlacementMethod="XHeight" sizeScale="3x:0,0,0,0,0,0" minimumSize="0" diagramOrientation="Up" lineSizeType="MM" barWidth="5">
      <fontProperties style="" description="MS Shell Dlg 2,8.25,-1,5,50,0,0,0,0,0"/>
      <attribute field="" color="#000000" label=""/>
    </DiagramCategory>
  </SingleCategoryDiagramRenderer>
  <DiagramLayerSettings priority="0" linePlacementFlags="18" dist="0" zIndex="0" placement="1" obstacle="0" showAll="1">
    <properties>
      <Option type="Map">
        <Option type="QString" name="name" value=""/>
        <Option name="properties"/>
        <Option type="QString" name="type" value="collection"/>
      </Option>
    </properties>
  </DiagramLayerSettings>
  <fieldConfiguration>
    <field name="OBJECTID">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field name="NOMBRE_GEO">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field name="Shape_Leng">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field name="Shape_Area">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
  </fieldConfiguration>
  <aliases>
    <alias field="OBJECTID" name="" index="0"/>
    <alias field="NOMBRE_GEO" name="" index="1"/>
    <alias field="Shape_Leng" name="" index="2"/>
    <alias field="Shape_Area" name="" index="3"/>
  </aliases>
  <excludeAttributesWMS/>
  <excludeAttributesWFS/>
  <defaults>
    <default field="OBJECTID" expression="" applyOnUpdate="0"/>
    <default field="NOMBRE_GEO" expression="" applyOnUpdate="0"/>
    <default field="Shape_Leng" expression="" applyOnUpdate="0"/>
    <default field="Shape_Area" expression="" applyOnUpdate="0"/>
  </defaults>
  <constraints>
    <constraint field="OBJECTID" notnull_strength="0" unique_strength="0" exp_strength="0" constraints="0"/>
    <constraint field="NOMBRE_GEO" notnull_strength="0" unique_strength="0" exp_strength="0" constraints="0"/>
    <constraint field="Shape_Leng" notnull_strength="0" unique_strength="0" exp_strength="0" constraints="0"/>
    <constraint field="Shape_Area" notnull_strength="0" unique_strength="0" exp_strength="0" constraints="0"/>
  </constraints>
  <constraintExpressions>
    <constraint field="OBJECTID" exp="" desc=""/>
    <constraint field="NOMBRE_GEO" exp="" desc=""/>
    <constraint field="Shape_Leng" exp="" desc=""/>
    <constraint field="Shape_Area" exp="" desc=""/>
  </constraintExpressions>
  <attributeactions>
    <defaultAction key="Canvas" value="{00000000-0000-0000-0000-000000000000}"/>
  </attributeactions>
  <attributetableconfig sortExpression="&quot;Shape_Area&quot;" actionWidgetStyle="dropDown" sortOrder="0">
    <columns>
      <column type="field" width="-1" name="OBJECTID" hidden="0"/>
      <column type="field" width="184" name="NOMBRE_GEO" hidden="0"/>
      <column type="field" width="-1" name="Shape_Leng" hidden="0"/>
      <column type="field" width="-1" name="Shape_Area" hidden="0"/>
      <column type="actions" width="-1" hidden="1"/>
    </columns>
  </attributetableconfig>
  <editform tolerant="1"></editform>
  <editforminit/>
  <editforminitcodesource>0</editforminitcodesource>
  <editforminitfilepath></editforminitfilepath>
  <editforminitcode><![CDATA[# -*- codificación: utf-8 -*-
"""
Los formularios de QGIS pueden tener una función de Python que
es llamada cuando se abre el formulario.

Use esta función para añadir lógica extra a sus formularios.

Introduzca el nombre de la función en el campo
"Python Init function".
Sigue un ejemplo:
"""
from qgis.PyQt.QtWidgets import QWidget

def my_form_open(dialog, layer, feature):
	geom = feature.geometry()
	control = dialog.findChild(QWidget, "MyLineEdit")
]]></editforminitcode>
  <featformsuppress>0</featformsuppress>
  <editorlayout>generatedlayout</editorlayout>
  <editable>
    <field name="FECHA" editable="1"/>
    <field name="GLOBALID" editable="1"/>
    <field name="NOMBRE_GEO" editable="1"/>
    <field name="OBJECTID" editable="1"/>
    <field name="PK_CUE" editable="1"/>
    <field name="PROYECTO" editable="1"/>
    <field name="RULEID" editable="1"/>
    <field name="SYMBOL" editable="1"/>
    <field name="Shape_Area" editable="1"/>
    <field name="Shape_Leng" editable="1"/>
  </editable>
  <labelOnTop>
    <field labelOnTop="0" name="FECHA"/>
    <field labelOnTop="0" name="GLOBALID"/>
    <field labelOnTop="0" name="NOMBRE_GEO"/>
    <field labelOnTop="0" name="OBJECTID"/>
    <field labelOnTop="0" name="PK_CUE"/>
    <field labelOnTop="0" name="PROYECTO"/>
    <field labelOnTop="0" name="RULEID"/>
    <field labelOnTop="0" name="SYMBOL"/>
    <field labelOnTop="0" name="Shape_Area"/>
    <field labelOnTop="0" name="Shape_Leng"/>
  </labelOnTop>
  <widgets/>
  <conditionalstyles>
    <rowstyles/>
    <fieldstyles/>
  </conditionalstyles>
  <expressionfields/>
  <previewExpression>OBJECTID</previewExpression>
  <mapTip></mapTip>
  <layerGeometryType>2</layerGeometryType>
</qgis>
