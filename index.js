var question = prompt(`What's your favourite weather?
    1) Spring
    2) Summer
    3) Autumn
    4) Winter`
 )

 if(question.toLowerCase() === 'spring'){
    document.write(`<div class="card card1" style="width: 20rem;">
      <img src="https://img1.picmix.com/output/stamp/normal/4/2/4/5/2085424_0d0d8.gif" alt="">
      <div class="content">
        <h4>HAPPY SPRING DAYS!</h4>
        <p>Spring season is the season of flowers and festivals thus brings lots of joy and happiness. Colorful and beautiful flowers completely win the heart and green grasses give us a nice ground to walk in the garden. Beautiful flying butterflies catch our eyes often in the morning and evening.</p>
      </div>
    </div>`)
    }
    
    else if(question.toLowerCase() === 'summer'){
    document.write(`<div class="card card2" style="width: 20rem;">
      <img src="https://www.icegif.com/wp-content/uploads/summer-icegif-13.gif" alt="">
      <div class="content">
        <h4>HAPPY SUMMER DAYS!</h4>
        <p>Summer is the warmest season of the year, usually lasting from June to August. During summer, the days are longer, and the nights are shorter. The sun shines brightly, making the weather hot and sunny. People often enjoy outdoor activities like swimming, picnics, and hiking.</p>
      </div>
    </div>`)
    }
    
    else if(question.toLowerCase() === 'autumn'){
    document.write(`<div class="card card3" style="width: 20rem;">
      <img src="https://64.media.tumblr.com/b1dd28a97311b4c31df782b57a5af9b0/37e7c5bff7697cc4-6b/s500x750/a9d62023a197cedd6345ec2c49db94f0c9679c70.gif" alt="">
      <div class="content">
        <h4>HAPPY AUTUMN DAYS!</h4>
        <p>Autumn is the time of year that acts as a transition between summer and winter. The autumn months are the time of the harvest season. Autumn is generally regarded as the end of the growing season. In the autumn season, the daylight grows shorter, and animals prepare for the long, cold months ahead</p>
      </div>
    </div>`)
    }
    
    else if(question.toLowerCase() === 'winter'){
    document.write(`<div class="card card4" style="width: 20rem;">
      <img src="https://cdn.pixabay.com/animation/2022/07/30/11/35/11-35-03-905__340.png" alt="">
      <div class="content">
        <h4>HAPPY WINTER DAYS!</h4>
        <p>Winters are the coolest season that starts from December and last till March. The peak time when winter is experienced the most in December and January. In India, winters hold great importance. In addition, the essence it has is admired by many people.</p>
      </div>
    </div>`)
    }
    
    else{
    document.write(`<img class="img2" src="https://lh6.googleusercontent.com/proxy/hvVRYNV3UMULBolPFhSIr_w3UvJ38sBKIGf8zo6daW4nZ4IOBM8URLs7HodNgIm5MhOoNdRDDcxtJmtcvR8LtOYlY3s5igyQRknBkQXybK7L" alt=""></div>
    `)
    }
