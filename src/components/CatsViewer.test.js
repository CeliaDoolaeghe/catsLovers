import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import * as React from "react";
import Card from "./Card";
import CatsViewer from "./CatsViewer";

configure({adapter: new Adapter()});

describe('Card', () => {

    it('should render', () => {
        const enzymeWrapper = shallow(<CatsViewer />);

        expect(enzymeWrapper).toHaveLength(1);
    });


});
