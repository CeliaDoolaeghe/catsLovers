import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import * as React from "react";
import Card from "./Card";

configure({adapter: new Adapter()});

describe('Card', () => {

    it('should render', () => {
        const sweetCat = {
            race: "Sweet race",
            url: "Sweet url",
            description: "Sweet description"
        };
        const enzymeWrapper = shallow(<Card cat={sweetCat}/>);

        expect(enzymeWrapper).toHaveLength(1);
    });
});
