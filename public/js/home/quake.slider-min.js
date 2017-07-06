﻿(function($) {
	$.fn.extend({
		quake: function(options) {
			var fw = parseInt($("body").css("width"));
			var settings = $.extend({
				frameWidth: fw,
				frameHeight: 600,
				animationSpeed: 500,
				pauseTime: 4e3,
				rows: 4,
				cols: 12,
				thumbnails: true,
				effects: ["randomFade", "linearPeal", "linearPealReverse", "swirlFadeIn", "swirlFadeOut", "diagonalFade", "blind", "barsUp", "barsDown", "blindFade", "explode", "explodeFancy", "mixBars", "mixBarsFancy", "fade", "blindFadeReverse", "slideIn", "slideInFancy", "slideLeft", "slideRight", "slideUp", "slideDown", "fallingBlindFade", "raisingBlindFade"],
				nextText: "Next",
				prevText: "Prev",
				hasNextPrev: true,
				captionOpacity: .5,
				captionOrientations: ["right"],
				captionAnimationSpeed: 1e3,
				thumbnailsPath: "images/thumbs",
				captionsSetup: null
			}, options);
			return this.each(function() {
				function runAnimation() {
					if(!isAnimating) {
						isAnimating = true;
						currentRow = 0;
						var a = Math.floor(Math.random() * effects.length);
						currentEffect = effects[a];
						if(currentEffect == undefined) currentEffect = "randomFade";
						$(".quake-nav-container a").removeClass("active").eq(currentImageIndex).addClass("active");
						animateCaption();
						currentImage = images[currentImageIndex];
						switch(currentEffect) {
							case "randomFade":
								animateRandomFade();
								break;
							case "fade":
								animateFade();
								break;
							case "linearPeal":
								animateLinearPeal();
								break;
							case "linearPealReverse":
								animateReversePeal();
								break;
							case "swirlFadeIn":
								animateSwirlFadeIn();
								break;
							case "swirlFadeOut":
								animateSwirlFadeOut();
								break;
							case "diagonalFade":
								animateDiagonally();
								break;
							case "blind":
								animateBlind();
								break;
							case "blindFade":
								animateBlindFade();
								break;
							case "blindFadeReverse":
								animateBlindFadeReverse();
								break;
							case "explode":
								animateExplode();
								break;
							case "explodeFancy":
								animateExplodeFancy();
								break;
							case "barsUp":
								animateBarUp();
								break;
							case "barsDown":
								animateBarDown();
								break;
							case "mixBars":
								animateMixBars();
								break;
							case "mixBarsFancy":
								animateMixBarsFancy();
								break;
							case "slideIn":
								animateSlideIn();
								break;
							case "slideInFancy":
								animateSlideInFancy();
								break;
							case "slideLeft":
								animateSlideLeft();
								break;
							case "slideRight":
								animateSlideRight();
								break;
							case "slideUp":
								animateSlideUp();
								break;
							case "slideDown":
								animateSlideDown();
								break;
							case "fallingBlindFade":
								animateFallingBlindFade();
								break;
							case "raisingBlindFade":
								animateRaisingBlindFade();
								break
						}
						previousImage = currentImage;
						previousImageIndex = currentImageIndex;
						currentImageIndex++;
						if(currentImageIndex == images.length) currentImageIndex = 0
					}
				}

				function captionDefaultAnimation(a, b, c) {
					a.addClass("quake-slider-caption-container-" + c).show().css("opacity", "0").stop(true, true).animate({
						opacity: settings.captionOpacity
					}, settings.captionAnimationSpeed);
					b.addClass("quake-slider-caption-" + c).stop(true, true).animate({
						opacity: 1
					}, settings.captionAnimationSpeed)
				}

				function getConfiguration(slide) {
					if(settings.captionsSetup == null) return null;
					var setups = eval(settings.captionsSetup);
					for(var i = 0; i < setups.length; i++) {
						if(setups[i].slides != null) {
							if($.inArray(slide, setups[i].slides) != -1) return setups[i]
						}
					}
					return null
				}

				function animateCaption() {
					if(captions.length > currentImageIndex) {
						var a = settings.captionOrientations.length;
						var b = settings.captionOrientations[a - 1];
						if(currentImageIndex < a) b = settings.captionOrientations[currentImageIndex];
						captionContainer.removeAttr("style").removeClass("quake-slider-caption-container-left").removeClass("quake-slider-caption-container-top").removeClass("quake-slider-caption-container-bottom").removeClass("quake-slider-caption-container-right");
						captionContainer.parent().find(".quake-slider-caption").remove();
						var c = captions.eq(currentImageIndex).removeAttr("style").css("opacity", "0").removeClass("quake-slider-caption-right").removeClass("quake-slider-caption-left").removeClass("quake-slider-caption-top").removeClass("quake-slider-caption-bottom");
						captionContainer.after(c);
						if(settings.captionsSetup == null) {
							captionDefaultAnimation(captionContainer, c, b)
						} else {
							var d = getConfiguration(currentImageIndex);
							if(d != null) {
								if(d.orientation != null) b = d.orientation;
								captionContainer.addClass("quake-slider-caption-container-" + b).show().css("opacity", settings.captionOpacity);
								c.addClass("quake-slider-caption-" + b).css({
									opacity: 1
								});
								if(d.callback != null) d.callback(captionContainer, c, b);
								else captionDefaultAnimation(captionContainer, c, b)
							} else captionDefaultAnimation(captionContainer, c, b)
						}
					} else {
						captionContainer.stop(true, true).animate({
							opacity: 0
						}, settings.captionAnimationSpeed, function() {
							$(this).parent().find(".quake-slider-caption").remove()
						})
					}
				}

				function createCircles(a) {
					minCircumeference = frameWidth / circles;
					if(minCircumeference % 2 != 0 && a != currentImageIndex) minCircumeference++;
					zindex = 100;
					timeFactor = animationSpeed / circles;
					for(var b = 0; b < circles; b++) {
						var c = b + 1;
						c /= 10;
						var d = (b + 1) * minCircumeference;
						var e = centerLeft - d / 2;
						var f = centerTop - d / 2;
						var g = (b + 1) * minCircumeference;
						var h = $("<div/>").css({
							backgroundImage: "url(" + getImageSrc(images[a]) + ")",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							left: e,
							top: f,
							position: "absolute",
							width: d,
							height: d,
							zIndex: zindex--,
							opacity: 0
						}).addClass("quake-el");
						sliderContainer.append(h)
					}
				}

				function getImageSrc(a) {
					if(a.is("img")) {
						return a.attr("src")
					} else if(a.is("a") && a.children().is("img")) return a.children().attr("src")
				}

				function createBoxes() {
					var a = frameWidth / cols;
					var b = frameHeight / rows;
					if(a % 10 > 0) {
						a = parseInt(a);
						a++
					}
					if(b % 10 > 0) {
						b = parseInt(b);
						b++
					}
					var c = cols * rows;
					timeFactor = animationSpeed / c;
					for(var d = 0; d < rows; d++) {
						for(var e = 0; e < cols; e++) {
							var f = $("<div/>").css({
								width: a + "px",
								height: b + "px",
								top: d * b + "px",
								left: e * a + "px",
								position: "absolute",
								backgroundImage: "url(" + getImageSrc(currentImage) + ")",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "" + e * -a + "px " + d * -b + "px"
							}).addClass("quake-el").hide();
							sliderContainer.append(f)
						}
					}
					$(".quake-el", sliderContainer).each(function(a) {
						var b = {
							left: $(this).css("left"),
							top: $(this).css("top")
						};
						coordinates.push(b)
					})
				}

				function swapDirection(a) {
					if(a % cols == 0) {
						currentRow++;
						if(direction == "forward") direction = "backward";
						else direction = "forward"
					}
				}

				function animationComplete() {
					$(".quake-dn", sliderContainer).remove();
					$(".quake-el", sliderContainer).removeClass("quake-el").addClass("quake-dn").css("z-index", "0");
					$(".quake-fi").removeClass("quake-fi").addClass("quake-dn").css("z-index", "0");
					if(currentImage.is("a")) sliderContainer.find(".quake-link").css({
						display: "block"
					}).attr("href", currentImage.attr("href")).attr("target", currentImage.attr("target"));
					else sliderContainer.find(".quake-link").css({
						display: "none"
					}).attr("href", "#");
					isAnimating = false
				}

				function animateSlideUp() {
					var a = $("<div/>").addClass("quake-el").css({
						width: frameWidth,
						height: frameHeight,
						left: 0,
						top: frameHeight,
						position: "absolute",
						backgroundImage: "url(" + getImageSrc(currentImage) + ")",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						zIndex: 100,
						opacity: 0
					});
					sliderContainer.append(a);
					if(previousImage != null) {
						var b = $("<div/>").addClass("quake-el").css({
							width: frameWidth,
							height: frameHeight,
							left: 0,
							top: 0,
							position: "absolute",
							backgroundImage: "url(" + getImageSrc(previousImage) + ")",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							zIndex: 100
						});
						sliderContainer.append(b)
					}
					sliderContainer.append(a).append(b);
					var c = 0;
					$(".quake-el", sliderContainer).animate({
						top: "-=" + frameHeight,
						opacity: 1
					}, animationSpeed, function() {
						c++;
						if(c == 1) animationComplete()
					})
				}

				function animateSlideDown() {
					var a = $("<div/>").addClass("quake-el").css({
						width: frameWidth,
						height: frameHeight,
						left: 0,
						top: -frameHeight,
						position: "absolute",
						backgroundImage: "url(" + getImageSrc(currentImage) + ")",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						zIndex: 100,
						opacity: 0
					});
					sliderContainer.append(a);
					if(previousImage != null) {
						var b = $("<div/>").addClass("quake-el").css({
							width: frameWidth,
							height: frameHeight,
							left: 0,
							top: 0,
							position: "absolute",
							backgroundImage: "url(" + getImageSrc(previousImage) + ")",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							zIndex: 100
						});
						sliderContainer.append(b)
					}
					var c = 0;
					$(".quake-el", sliderContainer).animate({
						top: "+=" + frameHeight,
						opacity: 1
					}, animationSpeed, function() {
						c++;
						if(c == 1) animationComplete()
					})
				}

				function animateSlideRight() {
					var a = $("<div/>").addClass("quake-el").css({
						width: frameWidth,
						height: frameHeight,
						left: -frameWidth,
						top: 0,
						position: "absolute",
						backgroundImage: "url(" + getImageSrc(currentImage) + ")",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						zIndex: 100,
						opacity: 0
					});
					sliderContainer.append(a);
					if(previousImage != null) {
						var b = $("<div/>").addClass("quake-el").css({
							width: frameWidth,
							height: frameHeight,
							left: 0,
							top: 0,
							position: "absolute",
							backgroundImage: "url(" + getImageSrc(previousImage) + ")",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							zIndex: 100
						});
						sliderContainer.append(b)
					}
					var c = 0;
					$(".quake-el", sliderContainer).animate({
						left: "+=" + frameWidth,
						opacity: 1
					}, animationSpeed, function() {
						c++;
						if(c == 1) animationComplete()
					})
				}

				function animateSlideLeft() {
					var a = $("<div/>").addClass("quake-el").css({
						width: frameWidth,
						height: frameHeight,
						left: frameWidth,
						top: 0,
						position: "absolute",
						backgroundImage: "url(" + getImageSrc(currentImage) + ")",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						zIndex: 100,
						opacity: 0
					});
					sliderContainer.append(a);
					if(previousImage != null) {
						var b = $("<div/>").addClass("quake-el").css({
							width: frameWidth,
							height: frameHeight,
							left: 0,
							top: 0,
							position: "absolute",
							backgroundImage: "url(" + getImageSrc(previousImage) + ")",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							zIndex: 100
						});
						sliderContainer.append(b)
					}
					var c = 0;
					$(".quake-el", sliderContainer).animate({
						left: "-=" + frameWidth,
						opacity: 1
					}, animationSpeed, function() {
						c++;
						if(c == 1) animationComplete()
					})
				}

				function animateSlideInFancy() {
					var a = 0;
					var b = 0;
					var c = cols;
					for(var d = 0; d < c; d++) {
						$("<div/>").css({
							width: frameWidth,
							height: Math.ceil(frameHeight / c),
							marginLeft: d % 2 == 0 ? -frameWidth : frameWidth,
							top: Math.ceil(d * frameHeight / c),
							position: "absolute",
							backgroundImage: "url(" + getImageSrc(currentImage) + ")",
							backgroundPosition: "0px " + -Math.ceil(d * frameHeight / c) + "px",
							opacity: 0
						}).addClass("quake-el").appendTo(sliderContainer)
					}
					timeFactor = animationSpeed / c;
					$(".quake-el", sliderContainer).each(function() {
						var d = $(this);
						setTimeout(function() {
							d.animate({
								marginLeft: 0,
								opacity: 1
							}, animationSpeed, function() {
								b++;
								if(b == c) animationComplete()
							})
						}, a * 2);
						a += timeFactor
					})
				}

				function animateSlideIn() {
					var a = 0;
					var b = 0;
					var c = cols;
					for(var d = 0; d < c; d++) {
						$("<div/>").css({
							width: frameWidth,
							height: Math.ceil(frameHeight / c),
							marginLeft: -frameWidth,
							top: Math.ceil(d * frameHeight / c),
							position: "absolute",
							backgroundImage: "url(" + getImageSrc(currentImage) + ")",
							backgroundPosition: "0px " + -Math.ceil(d * frameHeight / c) + "px",
							opacity: 0
						}).addClass("quake-el").appendTo(sliderContainer)
					}
					timeFactor = animationSpeed / c;
					$(".quake-el", sliderContainer).each(function() {
						var d = $(this);
						setTimeout(function() {
							d.animate({
								marginLeft: 0,
								opacity: 1
							}, animationSpeed, function() {
								b++;
								if(b == c) animationComplete()
							})
						}, a * 2);
						a += timeFactor
					})
				}

				function animateFade() {
					$("<div/>").css({
						width: frameWidth,
						height: frameHeight,
						backgroundImage: "url(" + getImageSrc(currentImage) + ")",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						position: "absolute",
						left: 0,
						top: 0,
						zIndex: 100,
						opacity: 0
					}).addClass("quake-el").appendTo(sliderContainer);
					$(".quake-el", sliderContainer).animate({
						opacity: 1
					}, animationSpeed * 2, function() {
						animationComplete()
					})
				}

				function animateExplodeFancy() {
					var a = 0;
					var b = 0;
					var c = rows * cols;
					timeFactor = animationSpeed / c;
					var d = Math.ceil(frameWidth / cols);
					var e = Math.ceil(frameHeight / rows);
					var f = new Array;
					for(var g = 0; g < rows; g++) {
						for(var h = 0; h < cols; h++) {
							$("<div/>").css({
								width: 0,
								height: 0,
								left: Math.ceil(frameWidth / 2 - d / 2),
								top: Math.ceil(frameHeight / 2 - e / 2),
								opacity: 0,
								position: "absolute",
								backgroundImage: "url(" + getImageSrc(currentImage) + ")",
								backgroundPosition: "" + -(h * d) + "px " + -(g * e) + "px"
							}).addClass("quake-el").appendTo(sliderContainer);
							var i = [{
								left: h * d,
								top: g * e
							}];
							f.push(i)
						}
					}
					$(".quake-el", sliderContainer).each(function(g) {
						var h = $(this);
						setTimeout(function() {
							var a = f[g][0];
							h.animate({
								left: a.left,
								top: a.top,
								opacity: 1,
								width: d,
								height: e
							}, animationSpeed, function() {
								b++;
								if(b == c - 1) {
									animationComplete()
								}
							})
						}, a * 2);
						a += timeFactor
					})
				}

				function animateExplode() {
					var a = 0;
					var b = 0;
					var c = rows * cols;
					timeFactor = animationSpeed / c;
					var d = Math.ceil(frameWidth / cols);
					var e = Math.ceil(frameHeight / rows);
					var f = new Array;
					for(var g = 0; g < rows; g++) {
						for(var h = 0; h < cols; h++) {
							$("<div/>").css({
								width: d,
								height: e,
								left: Math.ceil(frameWidth / 2 - d / 2),
								top: Math.ceil(frameHeight / 2 - e / 2),
								opacity: 0,
								position: "absolute",
								backgroundImage: "url(" + getImageSrc(currentImage) + ")",
								backgroundPosition: "" + -(h * d) + "px " + -(g * e) + "px"
							}).addClass("quake-el").appendTo(sliderContainer);
							var i = [{
								left: h * d,
								top: g * e
							}];
							f.push(i)
						}
					}
					$(".quake-el", sliderContainer).each(function(d) {
						var e = $(this);
						var g = f[d][0];
						e.animate({
							left: g.left,
							top: g.top,
							opacity: 1
						}, animationSpeed * 2, function() {
							b++;
							if(b == c - 1) animationComplete()
						});
						a += timeFactor
					})
				}

				function animateBarUp() {
					var a = 0;
					var b = 0;
					var c = cols * rows / 2;
					timeFactor = animationSpeed / c;
					for(var d = 0; d < c; d++) {
						$("<div/>").css({
							width: Math.ceil(frameWidth / c),
							height: frameHeight,
							marginTop: frameHeight,
							left: Math.ceil(d * frameWidth / c),
							position: "absolute",
							backgroundImage: "url(" + getImageSrc(currentImage) + ")",
							backgroundPosition: "" + -(d * frameWidth / c) + "px 0px",
							opacity: 0
						}).addClass("quake-el").appendTo(sliderContainer)
					}
					$(".quake-el", sliderContainer).each(function(d) {
						var e = $(this);
						setTimeout(function() {
							e.animate({
								marginTop: 0,
								opacity: 1
							}, animationSpeed, function() {
								b++;
								if(b == c - 1) animationComplete()
							})
						}, a * 1.5);
						a += timeFactor
					})
				}

				function animateBarDown() {
					var a = 0;
					var b = 0;
					var c = cols * rows / 2;
					timeFactor = animationSpeed / c;
					for(var d = 0; d < c; d++) {
						$("<div/>").css({
							width: Math.ceil(frameWidth / c),
							height: frameHeight,
							marginTop: -frameHeight,
							left: Math.ceil(d * frameWidth / c),
							position: "absolute",
							backgroundImage: "url(" + getImageSrc(currentImage) + ")",
							backgroundPosition: "" + -(d * frameWidth / c) + "px 0px",
							opacity: 0
						}).addClass("quake-el").appendTo(sliderContainer)
					}
					$(".quake-el", sliderContainer).each(function(d) {
						var e = $(this);
						setTimeout(function() {
							e.animate({
								marginTop: 0,
								opacity: 1
							}, animationSpeed, function() {
								b++;
								if(b == c - 1) animationComplete()
							})
						}, a * 1.5);
						a += timeFactor
					})
				}

				function showBars(a) {
					a.each(function(b) {
						var c = $(this);
						setTimeout(function() {
							c.animate({
								marginTop: 0,
								opacity: 1
							}, animationSpeed, function() {
								complete++;
								if(complete == a - 1) animationComplete()
							})
						}, factor * 1.5);
						factor += timeFactor
					})
				}

				function animateMixBarsFancy() {
					var a = 0;
					var b = 0;
					var c = cols * rows / 2;
					timeFactor = animationSpeed / c;
					for(var d = 0; d < c; d++) {
						$("<div/>").css({
							width: Math.ceil(frameWidth / c),
							height: frameHeight,
							marginTop: d % 2 == 0 ? -frameHeight : frameHeight,
							left: Math.ceil(d * frameWidth / c),
							position: "absolute",
							backgroundImage: "url(" + getImageSrc(currentImage) + ")",
							backgroundPosition: "" + -(d * frameWidth / c) + "px 0px",
							opacity: 0
						}).addClass("quake-el").appendTo(sliderContainer)
					}
					$(".quake-el:odd", sliderContainer).each(function(d) {
						var e = $(".quake-el", sliderContainer).eq(d);
						var f = $(".quake-el", sliderContainer).eq(c - (d + 1));
						setTimeout(function() {
							e.animate({
								marginTop: 0,
								opacity: 1
							}, animationSpeed, function() {
								b++;
								if(b == c - 1) animationComplete()
							});
							f.animate({
								marginTop: 0,
								opacity: 1
							}, animationSpeed, function() {
								b++;
								if(b == c - 1) animationComplete()
							})
						}, a * 1.5);
						a += timeFactor
					})
				}

				function animateMixBars() {
					var a = 0;
					var b = 0;
					var c = cols * rows / 2;
					timeFactor = animationSpeed / c;
					for(var d = 0; d < c; d++) {
						$("<div/>").css({
							width: Math.ceil(frameWidth / c),
							height: frameHeight,
							marginTop: d % 2 == 0 ? -frameHeight : frameHeight,
							left: Math.ceil(d * frameWidth / c),
							position: "absolute",
							backgroundImage: "url(" + getImageSrc(currentImage) + ")",
							backgroundPosition: "" + -(d * frameWidth / c) + "px 0px",
							opacity: 0
						}).addClass("quake-el").appendTo(sliderContainer)
					}
					$(".quake-el", sliderContainer).each(function(d) {
						var e = $(this);
						setTimeout(function() {
							e.animate({
								marginTop: 0,
								opacity: 1
							}, animationSpeed, function() {
								b++;
								if(b == c - 1) animationComplete()
							})
						}, a * 1.5);
						a += timeFactor
					})
				}

				function animateRaisingBlindFade() {
					var a = rows * 2;
					var b = 0;
					var c = 0;
					var d = frameHeight / a;
					if(d % 10 != 0) d += 1;
					for(var e = 0; e < a; e++) {
						$("<div/>").css({
							width: frameWidth,
							height: d,
							left: 0,
							top: Math.ceil(e * frameHeight / a),
							position: "absolute",
							backgroundImage: "url(" + getImageSrc(currentImage) + ")",
							backgroundPosition: "0px " + -(e * frameHeight / a) + "px",
							opacity: 0
						}).addClass("quake-el").appendTo(sliderContainer)
					}
					timeFactor = animationSpeed / a;
					$(".quake-el", sliderContainer).each(function(d) {
						var e = $(".quake-el", sliderContainer).eq(a - (d + 1));
						setTimeout(function() {
							e.animate({
								opacity: 1
							}, animationSpeed, function() {
								c++;
								if(c == a - 1) {
									animationComplete()
								}
							})
						}, b * 2);
						b += timeFactor
					})
				}

				function animateFallingBlindFade() {
					var a = rows * 2;
					var b = 0;
					var c = 0;
					var d = frameHeight / a;
					if(d % 10 != 0) d += 1;
					for(var e = 0; e < a; e++) {
						$("<div/>").css({
							width: frameWidth,
							height: d,
							left: 0,
							top: Math.ceil(e * frameHeight / a),
							position: "absolute",
							backgroundImage: "url(" + getImageSrc(currentImage) + ")",
							backgroundPosition: "0px " + -(e * frameHeight / a) + "px",
							opacity: 0
						}).addClass("quake-el").appendTo(sliderContainer)
					}
					timeFactor = animationSpeed / a;
					$(".quake-el", sliderContainer).each(function(d) {
						var e = $(this);
						setTimeout(function() {
							e.animate({
								opacity: 1
							}, animationSpeed, function() {
								c++;
								if(c == a - 1) {
									animationComplete()
								}
							})
						}, b * 2);
						b += timeFactor
					})
				}

				function animateBlindFadeReverse() {
					var a = cols * 2;
					var b = 0;
					var c = 0;
					var d = frameWidth / a;
					if(d % 10 != 0) d += 1;
					for(var e = 0; e < a; e++) {
						$("<div/>").css({
							width: d,
							height: frameHeight,
							left: Math.ceil(e * frameWidth / a),
							position: "absolute",
							backgroundImage: "url(" + getImageSrc(currentImage) + ")",
							backgroundPosition: "" + -(e * frameWidth / a) + "px 0px",
							opacity: 0
						}).addClass("quake-el").appendTo(sliderContainer)
					}
					timeFactor = animationSpeed / a;
					$(".quake-el", sliderContainer).each(function(d) {
						var e = $(".quake-el", sliderContainer).eq(a - (d + 1));
						setTimeout(function() {
							e.animate({
								opacity: 1
							}, animationSpeed, function() {
								c++;
								if(c == a - 1) {
									animationComplete()
								}
							})
						}, b * 2);
						b += timeFactor
					})
				}

				function animateBlindFade() {
					var a = cols * 2;
					var b = 0;
					var c = 0;
					var d = frameWidth / a;
					if(d % 10 != 0) d += 1;
					for(var e = 0; e < a; e++) {
						$("<div/>").css({
							width: d,
							height: frameHeight,
							left: Math.ceil(e * frameWidth / a),
							position: "absolute",
							backgroundImage: "url(" + getImageSrc(currentImage) + ")",
							backgroundPosition: "" + -(e * frameWidth / a) + "px 0px",
							opacity: 0
						}).addClass("quake-el").appendTo(sliderContainer)
					}
					timeFactor = animationSpeed / a;
					$(".quake-el", sliderContainer).each(function(d) {
						var e = $(this);
						setTimeout(function() {
							e.animate({
								opacity: 1
							}, animationSpeed, function() {
								c++;
								if(c == a - 1) {
									animationComplete()
								}
							})
						}, b * 2);
						b += timeFactor
					})
				}

				function animateBlind() {
					var a = cols * 2;
					var b = 0;
					var c = 0;
					var d = frameWidth / a;
					if(d % 10 != 0) d++;
					for(var e = 0; e < a; e++) {
						$("<div/>").css({
							width: 0,
							height: frameHeight,
							left: Math.ceil(e * frameWidth / a),
							position: "absolute",
							backgroundImage: "url(" + getImageSrc(currentImage) + ")",
							backgroundPosition: "" + -(e * frameWidth / a) + "px 0px"
						}).addClass("quake-el").appendTo(sliderContainer)
					}
					timeFactor = animationSpeed / a;
					$(".quake-el", sliderContainer).each(function(e) {
						var f = $(this);
						setTimeout(function() {
							f.animate({
								width: d
							}, animationSpeed, function() {
								c++;
								if(c == a) {
									animationComplete()
								}
							})
						}, b);
						b += timeFactor
					})
				}

				function animateDiagonally() {
					var a = 0;
					var b = 0;
					var c = Math.ceil(frameWidth / cols);
					var d = Math.ceil(frameHeight / rows);
					for(var e = 0; e < rows; e++) {
						for(var f = 0; f < cols; f++) {
							$("<div/>").addClass("quake-el").css({
								width: c,
								height: d,
								left: Math.ceil(f * c),
								top: Math.ceil(e * d),
								position: "absolute",
								opacity: 0,
								backgroundImage: "url(" + getImageSrc(currentImage) + ")",
								backgroundPosition: "" + -(f * c) + "px " + -(e * d) + "px"
							}).appendTo(sliderContainer)
						}
					}
					var g = rows * cols;
					timeFactor = animationSpeed / g;
					var h = new Array;
					for(var i = 0; i < rows + cols - 1; i++) {
						h.push(i);
						h[i] = new Array;
						for(var j = Math.min(rows, i + 1) - 1; j >= Math.max(0, i - cols + 1); j--) {
							h[i].push(j * cols + i - j)
						}
					}
					$(h).each(function(c, d) {
						setTimeout(function() {
							$(d).each(function(a, c) {
								$(".quake-el:eq(" + c + ")").animate({
									opacity: 1
								}, animationSpeed, function() {
									b++;
									if(b == g) {
										animationComplete()
									}
								})
							})
						}, a * 6);
						a += timeFactor
					})
				}

				function hideIt(a) {
					var b = 0;
					var c = 0;
					var d = circles - a;
					var e = d + 1;
					e /= 10;
					e = 1 - e;
					$(".quake-el:eq(" + d + ")", sliderContainer).animate({
						opacity: e
					}, timeFactor, function() {
						if(a < $(".quake-el", sliderContainer).length - 1) {
							a++;
							hideIt(a)
						} else {
							$(".quake-el", sliderContainer).animate({
								opacity: 0
							}, 500);
							setTimeout(animationComplete, 501)
						}
					})
				}

				function animateSwirlFadeOut() {
					var a = $("<div/>").css({
						zIndex: 1,
						backgroundImage: "url(" + getImageSrc(currentImage) + ")",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						position: "absolute",
						width: "100%",
						height: "100%"
					}).addClass("quake-fi");
					createCircles(previousImageIndex);
					$(".quake-el", sliderContainer).css("opacity", "1", zindex, 2);
					var b = new Array;
					$(".quake-el", sliderContainer).each(function(a) {
						$(this).css({
							borderRadius: minCircumeference * (a + 1)
						})
					});
					$(".quake-el:last").css({
						borderRadius: 0
					});
					sliderContainer.append(a);
					setTimeout(function() {
						hideIt(1)
					}, 0)
				}

				function animateSwirlFadeIn() {
					createCircles(currentImageIndex);
					var a = 0;
					var b = 0;
					var c = new Array;
					$(".quake-el", sliderContainer).each(function(a) {
						c.push(minCircumeference * (a + 1))
					});
					c[c.length - 1] = 0;
					$(".quake-el", sliderContainer).each(function(d) {
						var e = $(this);
						setTimeout(function() {
							e.css({
								borderRadius: c[d]
							}).animate({
								opacity: 1,
								zIndex: 0
							}, animationSpeed, function() {
								b++;
								if(b == c.length) {
									animationComplete()
								}
							})
						}, a);
						a += timeFactor
					})
				}

				function animateReversePeal() {
					createBoxes();
					var a = 0;
					var b = 0;
					var c = new Array;
					$(".quake-el").each(function(a) {
						swapDirection(a);
						if(direction == "forward") {
							c.push(a)
						} else {
							var b = currentRow * cols - 1 + ((currentRow - 1) * cols - a);
							c.push(b)
						}
					});
					$(".quake-el").each(function(d) {
						setTimeout(function() {
							$(".quake-el:eq(" + c[d] + ")", sliderContainer).fadeIn(animationSpeed / 2, function() {
								b++;
								if(b == c.length) {
									animationComplete()
								}
							})
						}, a * 1.5);
						a += timeFactor
					})
				}

				function animateLinearPeal() {
					createBoxes();
					var a = 0;
					var b = 0;
					var c = $(".quake-el").length;
					$(".quake-el", sliderContainer).each(function() {
						var d = $(this);
						setTimeout(function() {
							d.fadeIn(animationSpeed, function() {
								b++;
								if(b == c) {
									animationComplete()
								}
							})
						}, a * 3);
						a += timeFactor
					})
				}

				function animateRandomFade() {
					createBoxes();
					var a = 0;
					var b = 0;
					var c = $(".quake-el").get().sort(function() {
						return Math.round(Math.random()) - .5
					});
					$(c).each(function(a) {
						var b = coordinates[a];
						var c = "left:" + b.left + "; top:" + b.top + "";
						$(this).css("background-position", c)
					});
					$(c).each(function(d) {
						if(b < c.length) {
							var e = $(this);
							setTimeout(function() {
								try {
									e.fadeIn(animationSpeed, function() {
										b++;
										if(b == c.length) {
											animationComplete()
										}
									})
								} catch(a) {}
							}, a);
							a += timeFactor * 2
						}
					})
				}

				function onNavClick() {
					if(!isAnimating && !$(this).hasClass("active")) {
						isAnimating = false;
						currentImageIndex = parseInt($(this).attr("rel"));
						stop();
						runAnimation();
						start()
					}
					return false
				}

				function addNavigationControls() {
					var a = $("<div/>").addClass("quake-nav-wrapper");
					var b = $("<div/>").addClass("quake-nav-container");
					$(images).each(function(a, c) {
						b.append($("<a/>").attr("href", "#").attr("rel", a).addClass("quake-nav-control").html(a))
					});
					$(".quake-nav-container a").live("click", onNavClick);
					sliderContainer.after(a);
					var c = totalImages * parseFloat(b.find("a").outerWidth());
					b.css("width", c);
					if(settings.thumbnails) {
						var d = $("<div/>").css({
							display: "none",
							opacity: "0"
						});
						d.addClass("quake-thumbnail").append($("<div/>").addClass("quake-thumbnail-preview").append($("<img/>")));
						a.append(d);
						$(".quake-nav-container a").live("mouseenter", function() {
							var a = $(this).position().left + $(this).outerWidth() / 2;
							var b = a - d.outerWidth() / 2;
							var c = $(this).position().top - d.outerHeight();
							var e = images[parseInt($(this).html())];
							if(e != null) {
								var f = getImageSrc(e).split("/");
								var g = settings.thumbnailsPath + "/" + f[f.length - 1];
								d.find("img").attr("src", g);
								d.css({
									left: b,
									top: c,
									display: "block"
								}).stop(true, true).animate({
									opacity: 1
								}, 500)
							}
						});
						$(".quake-nav-container a").live("mouseleave", function() {
							d.css({
								display: "none",
								opacity: 0
							})
						})
					}
				}

				function stop() {
					isAnimating = false;
					clearInterval(animationInterval);
					animationInterval = null
				}

				function start() {
					animationInterval = setInterval(runAnimation, pauseTime)
				}
				
				function setup() {
					captionContainer = $(".quake-slider-caption-container").css("opacity", settings.captionOpacity).html("");
					sliderContainer.html("");
					var a = $("<a/>").addClass("quake-link");
					a.css("display", "none");
					a.css("width", "100%");
					a.css("height", "600px"); 
					sliderContainer.prepend(a);
					if(settings.hasNextPrev) {
						sliderContainer.append(navContainer);
						navContainer.hide();
						sliderContainer.mouseenter(function() {
							stop();
							navContainer.show()
						}).mouseleave(function() {
							navContainer.hide();
							start()
						});
						navContainer.find(".quake-prev").click(function() {
							if(!isAnimating) {
								stop();
								currentImageIndex = previousImageIndex;
								currentImageIndex -= 1;
								if(currentImageIndex < 0) currentImageIndex = images.length - 1;
								runAnimation()
							}
						});
						navContainer.find(".quake-next").click(function() {
							if(!isAnimating) {
								stop();
								runAnimation()
							}
						})
					}
					sliderContainer.append(captionContainer)
				}
				var frameWidth = settings.frameWidth;
				var frameHeight = settings.frameHeight;
				var cols = settings.cols;
				var rows = settings.rows;
				var smallThumbHeight = 10;
				var animationSpeed = settings.animationSpeed;
				var pauseTime = settings.pauseTime + animationSpeed;
				var effects = settings.effects;
				var sliderContainer = $(this);
				var showThumbnails = settings.thumbnails;
				var images = new Array;
				var currentImage = null;
				var previousImage = null;
				var currentImageIndex = 0;
				var previousImageIndex = 0;
				var coordinates = new Array;
				var timeFactor = 0;
				var animationInterval;
				var centerLeft = 0;
				var centerTop = 0;
				var zindex = 100;
				var circles = 10;
				var direction = "backward";
				var isForward = true;
				var minCircumeference;
				var currentRow = 0;
				var isAnimating = false;
				var captionContainer;
				var navContainer;
				var totalImages;
				var captions;
				var visibleTumbnails = 0;
				var sliderWrapper = $("<div/>").addClass("quake-slider-wrapper");
				sliderWrapper.css({
					width: frameWidth,
					height: frameHeight
				});
				if(!sliderContainer.hasClass("quake-slider")) sliderContainer.addClass("quake-slider");
				sliderContainer.before(sliderWrapper);
				sliderWrapper.append(sliderContainer);
				sliderContainer.find(".quake-slider-images").css("display", "none");
				sliderContainer.find(".quake-slider-captions").css("display", "none").addClass("quake-slider-caption-container");
				if(frameWidth % 2 != 0) circles--;
				centerLeft = frameWidth / 2;
				centerTop = frameHeight / 2;
				$(window).load(function() {
					navContainer = $("<div/>").addClass("quake-nav");
					navContainer.append($("<a/>").addClass("quake-prev").html(settings.prevText)).append($("<a/>").addClass("quake-next").html(settings.nextText));
					totalImages = sliderContainer.find(".quake-slider-images img").length;
					captions = sliderContainer.find(".quake-slider-caption").clone(true).css({
						opacity: 1
					});
					$(".quake-slider-images img", sliderContainer).each(function() {
						if($(this).parent().is("a")) {
							var a = $(this).parent().clone();
							images.push(a)
						} else images.push($(this).clone())
					});
					setup();
					addNavigationControls();
					runAnimation();
					start()
				});
				var currentEffect = "randomFade"
			})
		}
	})
})(jQuery)