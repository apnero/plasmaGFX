{

"metadata" :
{
	"formatVersion" : 3.2,
	"type"          : "scene",
	"sourceFile"    : "abstractPlasma.blend",
	"generatedBy"   : "Blender 2.65 Exporter",
	"objects"       : 5,
	"geometries"    : 2,
	"materials"     : 3,
	"textures"      : 0
},

"urlBaseType" : "relativeToScene",


"objects" :
{
	"Empty" : {
		"groups"    : [  ],
		"position"  : [ 0.447365, -0.640922, -0.103086 ],
		"rotation"  : [ -0, -1.5708, 2.44346 ],
		"quaternion": [ -0.664463, -0.241845, 0.664463, 0.241845 ],
		"scale"     : [ 1, 1, 1 ]
	},

	"Cube" : {
		"geometry"  : "geo_Cube.001",
		"groups"    : [  ],
		"material"  : "",
		"position"  : [ 24.7761, 25.7046, 22.616 ],
		"rotation"  : [ -0, -1.5708, 2.44346 ],
		"quaternion": [ -0.664463, -0.241845, 0.664463, 0.241845 ],
		"scale"     : [ 1, 1, 1 ],
		"visible"       : true,
		"castShadow"    : false,
		"receiveShadow" : false,
		"doubleSided"   : false
	},

	"Plasma" : {
		"geometry"  : "geo_PlasmaMesh",
		"groups"    : [  ],
		"material"  : "Material",
		"position"  : [ -11.8541, -0.762053, -0.351254 ],
		"rotation"  : [ 0.261067, -0.00264618, -0.0194161 ],
		"quaternion": [ 0.13017, -4.81608e-05, -0.00979753, 0.991443 ],
		"scale"     : [ 4.212, 4.212, 4.212 ],
		"visible"       : true,
		"castShadow"    : false,
		"receiveShadow" : false,
		"doubleSided"   : false
	},

	"Sun" : {
		"type"       : "AmbientLight",
		"position"   : [ -20.5012, 74.7284, -21.9202 ],
		"rotation"   : [ -6.09146, 0.200895, -0.33286 ],
		"color"      : 16777215,
		"distance"   : 25.000,
		"intensity"  : 1.000
	},

	"Camera" : {
		"type"  : "PerspectiveCamera",
		"fov"   : 45.690440,
		"aspect": 1.333000,
		"near"  : 0.001000,
		"far"   : 200.000000,
		"position": [ 2.52009, -2.74603, 18.6584 ],
		"target"  : [ 0, 0, 0 ]
	}
},


"geometries" :
{
	"geo_Cube.001" : {
		"type" : "ascii",
		"url"  : "abstractPlasma.Cube.001.js"
	},

	"geo_PlasmaMesh" : {
		"type" : "ascii",
		"url"  : "abstractPlasma.PlasmaMesh.js"
	}
},


"materials" :
{
	"FirstMat" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 10685440, "ambient": 10685440, "opacity": 1, "blending": "NormalBlending" }
	},

	"Material" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 2508, "ambient": 2508, "opacity": 1, "blending": "NormalBlending" }
	},

	"SecondMat" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 10724259, "ambient": 10724259, "opacity": 1, "blending": "NormalBlending" }
	}
},


"transform" :
{
	"position"  : [ 0, 0, 0 ],
	"rotation"  : [ 0, 0, 0 ],
	"scale"     : [ 1, 1, 1 ]
},

"defaults" :
{
	"bgcolor" : [ 0, 0, 0 ],
	"bgalpha" : 1.000000,
	"camera"  : "Camera"
}

}
