# Dressmatic
An application that manages wardrobes for the blind. It also helps them choose and match outfits.
## Created by Guides:
Kareem Elsawah
Ahmed Emad
Emad Mostafa
Omar Shawky

## Datasets:
* Polyvore(409k)
* Deepfashion2

## Deep learning models:
### Yolov3:
Using "https://github.com/ultralytics/yolov3", we trained the model using custom data and modified it to work with opencv's GrabCut algorithm to isolate our articles of clothing.

### Outfit Model:
We created a CNN based model using a pretrained resnet50 and a custom fully connected layer. This model was trained using part of the polyvore dataset.

### Upper and Lower type models:
These models classify each article of clothing into various classes ["sweater","shirt","blouse","top","skirt","jeans","tight",...]

### feature representation
We used a pretrained Resnet model to encode our articles of clothing into a feature representation that we can later use to identify the different articles from each other.

### Color naming:
We used kmeans to find the most abundant colors in our article of clothing.

## Deployment:
We deployed our models using Flask on Amazon Web Services (AWS) using the EC2 service.

## Frontend:
We made the frontend for our application using HTML and javascript; we use annyang for voice recognition along with p5.js for text-to-speech


#### References:
* TongHe, Yang Hu. FashionNet: PersonalizedOutﬁtRecommendation withDeepNeuralNetwork (October 2018)
* Pongsate Tangseng, Kota Yamaguchi, and Takayuki Okatani. Recommending Outfits from Personal Closet (April 2018)
