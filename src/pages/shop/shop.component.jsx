import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div title='shop-page'>
                {
                    collections.map (({id, ...otherCollectionProps}) => {
                        console.log(console.log('collection',id));
                        return  <CollectionPreview key={id} {...otherCollectionProps} />
                    })
                }
            </div>
        )
    }
}

export default ShopPage;
