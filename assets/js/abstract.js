	if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

			var SCREEN_WIDTH = window.innerWidth/1.1;
			var SCREEN_HEIGHT = window.innerHeight/2;

			var container,stats;

			var camera, scene, loaded;
			var renderer;

			var mesh, zmesh, geometry;

			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

			document.addEventListener( 'mousemove', onDocumentMouseMove, false );

			init();
			animate();

			function $( id ) {

				return document.getElementById( id );

			}


			function init() {
			
				var loadScene = createLoadScene();

				camera = loadScene.camera;
				scene = loadScene.scene;

				renderer = new THREE.WebGLRenderer();
				renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
				renderer.domElement.style.position = "relative";
				$("graphix").appendChild( renderer.domElement );

				$( "start" ).addEventListener( 'click', onStartClick, false );

				var callbackProgress = function( progress, result ) {

					var bar = 250,
						total = progress.total_models + progress.total_textures,
						loaded = progress.loaded_models + progress.loaded_textures;

					if ( total )
						bar = Math.floor( bar * loaded / total );

					$( "bar" ).style.width = bar + "px";

					count = 0;
					for ( var m in result.materials ) count++;

				}

				var callbackFinished = function( result ) {

					loaded = result;

					$( "message" ).style.display = "none";
					onStartClick();

				}

				$( "progress" ).style.display = "block";

				var loader = new THREE.SceneLoader();
				loader.callbackProgress = callbackProgress;

				loader.load( "assets/models/abstractPlasma.js", callbackFinished );

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2.2;
				windowHalfY = window.innerHeight / 4;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function setButtonActive( id ) {

				$( "start" ).style.backgroundColor = "green";

			}

			function onStartClick() {

				$( "progress" ).style.display = "none";

				camera = loaded.currentCamera;
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				scene = loaded.scene;

			}

			function onDocumentMouseMove(event) {

				mouseX = ( event.clientX - windowHalfX );
				mouseY = ( event.clientY - windowHalfY );

			}

			function createLoadScene() {

				var result = {

					scene:  new THREE.Scene(),
					camera: new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 1, 1000 )

				};

				result.camera.position.z = 100;
				return result;

			}

			//

			function animate() {

				requestAnimationFrame( animate );

				render();

			}

			function render() {

				camera.position.x += ( mouseX - camera.position.x ) * .001;
				camera.position.y += ( - mouseY - camera.position.y ) * .001;

				camera.lookAt( scene.position );

				renderer.render( scene, camera );

			}