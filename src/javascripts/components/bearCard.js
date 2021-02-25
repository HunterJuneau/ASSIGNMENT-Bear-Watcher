const bearCard = (bear, i) => `<div class="card" style="width: 18rem;" id="${i}">
                                <img src="${bear.imgUrl}" class="card-img-top" alt="${bear.name}">
                                <div class="card-body">
                                  <h5 class="card-title">${bear.name}</h5>
                                </div>
                              </div>`;

export default bearCard;
