import React from "react"
import "./Body.css"
import RestaurentCard from "./RestaurantCard"

const Body = ()=>{

    const  restaurant = [
        {
            "type": "restaurant",
            "info": {
                "resId": 3401847,
                "name": "Pushpak Misthan Bhandar and Sweet",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/3401847\/9ee960986dd6e72b60f81b52c39622fa_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/3401847\/9ee960986dd6e72b60f81b52c39622fa_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "4.3",
                    "rating_text": "4.3",
                    "rating_subtitle": "Very Good",
                    "rating_color": "5BA829",
                    "votes": "29.1K",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "4.4",
                            "reviewCount": "253",
                            "reviewTextSmall": "253 Reviews",
                            "subtext": "253 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "4.4",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "4.2",
                            "reviewCount": "28.9K",
                            "reviewTextSmall": "28.9K Reviews",
                            "subtext": "28.9K Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "4.2",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b9100 for two"
                },
                "cfo": {
                    "text": "\u20b9100 for one"
                },
                "locality": {
                    "name": "Mantola, Agra",
                    "address": "17\/8, Fulatti Bazar, Mantola, Agra",
                    "localityUrl": "agra\/mantola-restaurants"
                },
                "timing": {
                    "text": "Opens in 28 minutes",
                    "color": "#e5521f"
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                        "url": "https:\/\/www.zomato.com\/agra\/restaurants\/mithai\/",
                        "name": "Mithai"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/agra\/restaurants\/street-food\/",
                        "name": "Street Food"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9100 for one"
                }
            },
            "order": {
                "deliveryTime": "23 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/agra\/pushpak-misthan-bhandar-and-sweet-mantola\/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "\/agra\/pushpak-misthan-bhandar-and-sweet-mantola\/order",
                "clickActionDeeplink": ""
            },
            "distance": "1.3 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"5029051e-26cd-45c9-a21d-d376dfe33034\",\"location_type\":\"delivery_cell\",\"location_id\":\"4140058016516931584\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"3401847\",\"element_type\":\"listing\",\"rank\":1}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "\u20b9125 OFF",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                        "aspect_ratio": 2.66666666667
                    },
                    "text": "Follows all Max Safety measures to ensure your food is safe"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 3400177,
                "name": "Deviram Sweets & Restaurant",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/7\/3400177\/22ebd227dec12d2eae482ee3bf31a0b9_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/7\/3400177\/22ebd227dec12d2eae482ee3bf31a0b9_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "4.2",
                    "rating_text": "4.2",
                    "rating_subtitle": "Very Good",
                    "rating_color": "5BA829",
                    "votes": "6,041",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "4.3",
                            "reviewCount": "262",
                            "reviewTextSmall": "262 Reviews",
                            "subtext": "262 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "4.3",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "4.1",
                            "reviewCount": "5,779",
                            "reviewTextSmall": "5,779 Reviews",
                            "subtext": "5,779 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "4.1",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b9650 for two"
                },
                "cfo": {
                    "text": "\u20b9100 for one"
                },
                "locality": {
                    "name": "Rakabganj, Agra",
                    "address": "Pratappura Crossing, Rakabganj, Agra",
                    "localityUrl": "agra\/rakabganj-restaurants"
                },
                "timing": {
                    "text": "Opens in 13 minutes",
                    "color": "#e5521f"
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/agra\/restaurants\/north-indian\/",
                        "name": "North Indian"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                        "url": "https:\/\/www.zomato.com\/agra\/restaurants\/mithai\/",
                        "name": "Mithai"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/agra\/restaurants\/fast-food\/",
                        "name": "Fast Food"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/agra\/restaurants\/beverages\/",
                        "name": "Beverages"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/agra\/restaurants\/desserts\/",
                        "name": "Desserts"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9100 for one"
                }
            },
            "order": {
                "deliveryTime": "15 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/agra\/deviram-sweets-restaurant-rakabganj\/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "\/agra\/deviram-sweets-restaurant-rakabganj\/order",
                "clickActionDeeplink": ""
            },
            "distance": "1.8 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"5029051e-26cd-45c9-a21d-d376dfe33034\",\"location_type\":\"delivery_cell\",\"location_id\":\"4140058016516931584\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"3400177\",\"element_type\":\"listing\",\"rank\":2}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "\u20b950 OFF",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                        "aspect_ratio": 2.66666666667
                    },
                    "text": "Follows all Max Safety measures to ensure your food is safe"
                }
            ]
        }]

    return(
        <>
         <div id="body-container">
             {restaurant.map((obj) =>{
                return ( <RestaurentCard {...obj.info}  key={obj.info.resId}/>)
             })}
         </div>
        </>
    )
}

export default Body