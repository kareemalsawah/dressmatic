function adjOrder_In(totalClothesNo) {
  var orderi = 0;
  for (var i = 1; i <= totalClothesNo; i++) {
    orderi = JSON.parse(localStorage.getItem("order" + i));
    if (orderi !== 0) {
      orderi++;
      localStorage.setItem("order" + i, JSON.stringify(orderi));
    }
  }
}

function adjOrder_Out(totalClothesNo, Order) { // Could do the upper function's work, meh
  var orderi = 0;
  for (var i = 1; i <= totalClothesNo; i++) {
    orderi = JSON.parse(localStorage.getItem("order" + i));
    if (orderi > Order) {
      --orderi;
      localStorage.setItem("order" + i, JSON.stringify(orderi));
    }
  }
}


function inputWashedClothes(ID) {
  var totalClothesNo = JSON.parse(localStorage.getItem("totalClothesNo"));
  if (totalClothesNo > 1) {
    adjOrder_In(totalClothesNo);
  }
  localStorage.setItem("timeWorn" + ID, JSON.stringify(0));
  localStorage.setItem("timeOut" + ID, JSON.stringify(0));
  localStorage.setItem("order" + ID, JSON.stringify(1));
}

function outputClothes(ID) {

  var totalClothesNo = JSON.parse(localStorage.getItem("totalClothesNo"));
  localStorage.setItem("timeOut" + ID, JSON.stringify(new Date().getTime()));
  var Order = JSON.parse(localStorage.getItem("order" + ID));
  if (totalClothesNo > 1) {
    adjOrder_Out(totalClothesNo, Order);
  }
  localStorage.setItem("order" + ID, JSON.stringify(0));


}

function clothesToWash() {

  var totalClothesNo = JSON.parse(localStorage.getItem("totalClothesNo"));
  var timeWorn;
  var order;
  var clothes = [];
  for (var i = 1; i <= totalClothesNo; i++) {
    timeWorn = JSON.parse(localStorage.getItem("timeWorn" + i));
    order = JSON.parse(localStorage.getItem("order" + i));
    if (timeWorn > 8 && (order !== 0)) {
      clothes.push(i);
    }
  }
  return clothes;
}

function chooseOutfit() {
  var current_outfits = JSON.parse(localStorage.getItem("current_outfits"));
  var num_outfits = current_outfits.length-1;
  var out_uppers = JSON.parse(localStorage.getItem("out_uppers"));
  var out_lowers = JSON.parse(localStorage.getItem("out_lowers"));
  var current_uppers = JSON.parse(localStorage.getItem("current_uppers"));
  var current_lowers = JSON.parse(localStorage.getItem("current_lowers"));
  if (out_uppers.length == current_uppers.length || out_lowers.length == current_lowers.length) {
    return null;
  }
  var random_outfit = Math.floor(Math.random() * num_outfits);
  var outfit_to_return = current_outfits[random_outfit];
  chosen_outfit = outfit_to_return;

  while (out_uppers.indexOf(outfit_to_return[0]) != -1 || out_lowers.indexOf(outfit_to_return[1]) != -1) {
    random_outfit = Math.floor(Math.random() * num_outfits);
    outfit_to_return = current_outfits[random_outfit];
    chosen_outfit = outfit_to_return;
  }

  return outfit_to_return;
}

function makeTextForRemovingOutfitfinal(outfit) {
  var upper_item = outfit[0];
  var lower_item = outfit[1];
  var wardrobe = JSON.parse(localStorage.getItem("wardrobe"));
  var upper_idx = wardrobe.indexOf(upper_item);
  var lower_idx = wardrobe.indexOf(lower_item);
  var text = "Your outfit is made of item number "+upper_idx+" and "+lower_idx;
  return text;
}

function outfitRemoval(outfit) {
  var out_uppers = JSON.parse(localStorage.getItem("out_uppers"));
  var out_lowers = JSON.parse(localStorage.getItem("out_lowers"));

  out_uppers.push(outfit[0]);
  out_lowers.push(outfit[1]);
  localStorage.setItem("out_uppers", JSON.stringify(out_uppers));
  localStorage.setItem("out_lowers", JSON.stringify(out_lowers));
  var wardrobe = JSON.parse(localStorage.getItem("wardrobe"));
  var upper_idx = wardrobe.indexOf(outfit[0]);
  wardrobe.splice(upper_idx, 1);
  var lower_idx = wardrobe.indexOf(outfit[1]);
  wardrobe.splice(lower_idx, 1);
  localStorage.setItem("wardrobe",JSON.stringify(wardrobe));
}

function videoPlayer(player) {
  player.style.display = "block";
  const constraints = {
    video: true,
    facingMode: 'environment',
  };
  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      player.srcObject = stream;

      const track = stream.getVideoTracks()[0];
      player.addEventListener('loadedmetadata', (e) => {
        window.setTimeout(() => (
          onCapabilitiesReady(track.getCapabilities())
        ), 500);
      });

      function onCapabilitiesReady(capabilities) {
        if (capabilities.torch) {
          track.applyConstraints({
              advanced: [{
                torch: true
              }]
            })
            .catch(e => console.log(e));
        }
      }
    });
}

function videoPlayerClose(player) {
  player.style.display = "none";
  const constraints = {
    video: true,
    facingMode: 'environment',
  };
  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      player.srcObject = stream;

      const track = stream.getVideoTracks()[0];
      player.addEventListener('loadedmetadata', (e) => {
        window.setTimeout(() => (
          onCapabilitiesReady(track.getCapabilities())
        ), 500);
      });

      function onCapabilitiesReady(capabilities) {
        if (capabilities.torch) {
          track.applyConstraints({
              advanced: [{
                torch: false
              }]
            })
            .catch(e => console.log(e));
        }
      }
    });
}

function captureImage(player, canvas, context) {
  ctr = context.drawImage(player, 0, 0, canvas.width, canvas.height);
  return ctr;
}

function makeTextForRemovingOutfitConfirmation(ID) {
  var upper_item = outfit[0];
  var lower_item = outfit[1];
  var upper_text = upper_item[4] + " " + upper_item[3];
  var lower_text = lower_item[4] + " " + lower_item[3];
  var text = "Your outfit is made of " + upper_text + " and " + lower_text;
  return text;
}

/*
inputNewClothes(12563,2156412,"upper","Shirt","yellow");
inputNewClothes(114223,31421412,"upper","Shirt","black");
inputNewClothes(1224653,21431412,"upper","Shirt","white");
inputNewClothes(126523,21134412,"lower","jeans","purple");
inputNewClothes(125463,2143513412,"lower","jeans","pink");
inputNewClothes(12563,21415612,"lower","jeans","red");
inputNewClothes(1213653,21461512,"lower","jeans","blue");
inputNewClothes(121653,21416512,"upper","Shirt","gray");

localStorage.setItem("timeWorn7","9"); */

function Item(id_encoding, outfit_encoding, main_type, secondary_type, colors, id) {
  self.id_encoding = id_encoding;
  self.outfit_encoding = outfit_encoding;
  self.main_type = main_type;
  self.secondary_type = secondary_type;
  self.colors = colors;
  self.id = id;

  self.Euclidean_Dist = function(other) {
    var sum_dist = 0;
    for (var i = 0; i < other.length; i++) {
      var diff = other.id_encoding[i] - self.id_encoding[i];
      var diff_sq = diff * diff;
      sum_dist += diff_sq;
    }
    var euc_dist = Math.sqrt(sum_dist)
    return euc_dist;
  }
}

function Outfit(upper_item, lower_item, matchPercentage) {
  self.upper_item = upper_item;
  self.lower_item = lower_item;
  self.matchPercentage = matchPercentage;
}

function storageSetUp() {
  var blank_arr = JSON.stringify([]);
  localStorage.setItem("current_outfits", blank_arr);
  localStorage.setItem("current_uppers", blank_arr);
  localStorage.setItem("current_lowers", blank_arr);
  localStorage.setItem("out_lowers", blank_arr);
  localStorage.setItem("out_uppers", blank_arr);
  localStorage.setItem("wardrobe", blank_arr);
}


function Euclidean_Dist_measure(first, other) {
  var sum_dist = 0;
  for (var i = 0; i < other.length; i++) {
    var diff = other[i] - first[i];
    var diff_sq = diff * diff;
    sum_dist += diff_sq;
  }
  var euc_dist = Math.sqrt(sum_dist)
  return euc_dist;
}
