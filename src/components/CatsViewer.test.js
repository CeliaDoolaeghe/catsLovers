import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import * as React from "react";
import CatsViewer from "./CatsViewer";
import {handlers, loadNewProps} from "./CatsViewer.container";

configure({adapter: new Adapter()});

describe('CatsViewer', () => {

    it('should render', () => {
        const enzymeWrapper = shallow(<CatsViewer />);

        expect(enzymeWrapper).toHaveLength(1);
    });

    describe('Handlers', () => {

        it('should call setCatIndex with index - 1 when index > 0', () => {
            const mockSetCatIndex = jest.fn();
            const cats = [{},{}];
            const catIndex = 1;

            handlers.previous({
                setCatIndex: mockSetCatIndex,
                cats,
                catIndex,
            })();

            expect(mockSetCatIndex).toHaveBeenCalledWith(0);
        });

        it('should call setCatIndex with length - 1 when index = 0', () => {
            const mockSetCatIndex = jest.fn();
            const cats = [{},{}];
            const catIndex = 0;

            handlers.previous({
                setCatIndex: mockSetCatIndex,
                cats,
                catIndex,
            })();

            expect(mockSetCatIndex).toHaveBeenCalledWith(1);
        });

        it('should call setCatIndex with index + 1 when index < length', () => {
            const mockSetCatIndex = jest.fn();
            const cats = [{},{}];
            const catIndex = 0;

            handlers.next({
                setCatIndex: mockSetCatIndex,
                cats,
                catIndex,
            })();

            expect(mockSetCatIndex).toHaveBeenCalledWith(1);
        });

        it('should call setCatIndex with 0 when index = length - 1', () => {
            const mockSetCatIndex = jest.fn();
            const cats = [{},{}];
            const catIndex = 1;

            handlers.next({
                setCatIndex: mockSetCatIndex,
                cats,
                catIndex,
            })();

            expect(mockSetCatIndex).toHaveBeenCalledWith(0);
        });
    });

    describe('Load new Props', () => {

        it('should return isCatsLoaded false when cats is empty', () => {
            const cats = [];

            const result = loadNewProps({
                cats,
                catIndex: 0,
            });
            
            expect(result.isCatsLoaded).toBeFalsy();
        });

        it('should return isCatsLoaded true when cats is not empty and cat is correctly initialized', () => {
            const cat1 = {
                race: "race1",
                url: "url1",
                description: "description1"
            };
            const cat2 = {
                race: "race2",
                url: "url2",
                description: "description2"
            };
            const cats = [cat1, cat2];

            const result = loadNewProps({
                cats,
                catIndex: 0,
            });

            expect(result.isCatsLoaded).toBeTruthy();
            expect(result.cat).toEqual(cat1);
        });
    });

});
