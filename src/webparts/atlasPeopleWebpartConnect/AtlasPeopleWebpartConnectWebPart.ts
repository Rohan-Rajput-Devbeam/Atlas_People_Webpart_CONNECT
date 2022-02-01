import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneDropdown,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AtlasPeopleWebpartConnectWebPartStrings';
import AtlasPeopleWebpartConnect from './components/AtlasPeopleWebpartConnect';
import { IAtlasPeopleWebpartConnectProps } from './components/IAtlasPeopleWebpartConnectProps';


import { PropertyFieldFilePicker, IPropertyFieldFilePickerProps, IFilePickerResult } from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";

import { PropertyFieldCodeEditor, PropertyFieldCodeEditorLanguages } from '@pnp/spfx-property-controls/lib/PropertyFieldCodeEditor';

import { PropertyFieldMultiSelect } from '@pnp/spfx-property-controls/lib/PropertyFieldMultiSelect';

export interface IAtlasPeopleWebpartConnectWebPartProps {
  description1: any;
  description2: any;
  description3: any;
  description4: any;
  description5: any;

  filePickerResult1: any;
  filePickerResult2: any;
  filePickerResult3: any;
  filePickerResult4: any;
  filePickerResult5: any;

  role1: any;
  role2: any;
  role3: any;
  role4: any;
  role5: any;


  profileName1: any;
  profileName2: any;
  profileName3: any;
  profileName4: any;
  profileName5: any;

  htmlCode1: any;

  selectBrand1:any;
  selectBrand2:any;
  selectBrand3:any;
  selectBrand4:any;
  selectBrand5:any;

  byline1:any;
  byline2:any;
  byline3:any;
  byline4:any;
  byline5:any;



}

export default class AtlasPeopleWebpartConnectWebPart extends BaseClientSideWebPart<IAtlasPeopleWebpartConnectWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAtlasPeopleWebpartConnectProps> = React.createElement(
      AtlasPeopleWebpartConnect,
      {
        description1: this.properties.description1,
        description2: this.properties.description2,
        description3: this.properties.description3,
        description4: this.properties.description4,
        description5: this.properties.description5,

        role1: this.properties.role1,
        role2: this.properties.role2,
        role3: this.properties.role3,
        role4: this.properties.role4,
        role5: this.properties.role5,

        profileName1: this.properties.profileName1,
        profileName2: this.properties.profileName2,
        profileName3: this.properties.profileName3,
        profileName4: this.properties.profileName4,
        profileName5: this.properties.profileName5,

        filePickerResult1: this.properties.filePickerResult1,
        filePickerResult2: this.properties.filePickerResult2,
        filePickerResult3: this.properties.filePickerResult3,
        filePickerResult4: this.properties.filePickerResult4,
        filePickerResult5: this.properties.filePickerResult5,

        htmlCode1 : this.properties.htmlCode1,

        selectBrand1 : this.properties.selectBrand1,
        selectBrand2 : this.properties.selectBrand2,
        selectBrand3 : this.properties.selectBrand3,
        selectBrand4 : this.properties.selectBrand4,
        selectBrand5 : this.properties.selectBrand5,

        byline1 : this.properties.byline1,
        byline2 : this.properties.byline2,
        byline3 : this.properties.byline3,
        byline4 : this.properties.byline4,
        byline5 : this.properties.byline5,



      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: 'Profile-1 Details',
              groupFields: [

                PropertyPaneTextField('profileName1', {
                  label: "Name:",
                }),
                PropertyPaneTextField('role1', {
                  label: "Role:",
                }),
                PropertyPaneTextField('byline1', {
                  label: "Byline:",
                }),
                PropertyPaneDropdown('selectBrand1', {
                  label: 'Select Brand',
                  options: [
                    { key: 'American Wiskey', text: 'American Wiskey' },
                    { key: 'Courvoisier', text: 'Courvoisier' },
                    { key: 'Gin', text: 'Gin' },
                    { key: 'House of Suntory', text: 'House of Suntory' },
                    { key: 'Tequila', text: 'Tequila' },

                  ],
                  //  selectedKey: 'American Wiskey',
                }),
                PropertyPaneTextField('description1', {
                  label: "Description:",
                }),
                PropertyFieldFilePicker('filePicker1', {
                  context: this.context,
                  filePickerResult: this.properties.filePickerResult1,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => { console.log(e); this.properties.filePickerResult1 = e; },
                  onChanged: (e: IFilePickerResult) => { console.log(e); this.properties.filePickerResult1 = e; },
                  key: "filePickerId",
                  buttonLabel: "File Picker",
                  label: "File Picker",
                }),
                PropertyFieldCodeEditor('htmlCode', {
                  label: 'Edit HTML Code',
                  panelTitle: 'Edit HTML Code',
                  initialValue: this.properties.htmlCode1,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  disabled: false,
                  key: 'codeEditorFieldId',
                  language: PropertyFieldCodeEditorLanguages.HTML,
                  options: {
                    wrap: true,
                    fontSize: 20,
                    // more options
                  }
                })


              ]
            }
          ]
        },


        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: 'Profile-2 Details',
              groupFields: [
                PropertyPaneTextField('profileName2', {
                  label: "Name:",
                }),
                PropertyPaneTextField('role2', {
                  label: "Role:",
                }),
                PropertyPaneTextField('byline2', {
                  label: "Byline:",
                }),
                PropertyPaneDropdown('selectBrand2', {
                  label: 'Select Brand',
                  options: [
                    { key: 'American Wiskey', text: 'American Wiskey' },
                    { key: 'Courvoisier', text: 'Courvoisier' },
                    { key: 'Gin', text: 'Gin' },
                    { key: 'House of Suntory', text: 'House of Suntory' },
                    { key: 'Tequila', text: 'Tequila' },

                  ],
                  //  selectedKey: 'American Wiskey',
                }),
                PropertyPaneTextField('description2', {
                  label: "Description:",
                }),
                PropertyFieldFilePicker('filePicker2', {
                  context: this.context,
                  filePickerResult: this.properties.filePickerResult2,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => { console.log(e); this.properties.filePickerResult2 = e; },
                  onChanged: (e: IFilePickerResult) => { console.log(e); this.properties.filePickerResult2 = e; },
                  key: "filePickerId",
                  buttonLabel: "File Picker",
                  label: "File Picker",
                })

              ]
            }
          ]
        },

        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: 'Profile-3 Details',
              groupFields: [
                PropertyPaneTextField('profileName3', {
                  label: "Name:",
                }),
                PropertyPaneTextField('role3', {
                  label: "Role:",
                }),
                PropertyPaneTextField('byline3', {
                  label: "Byline:",
                }),
                PropertyPaneTextField('description3', {
                  label: "Description:",
                }),
                PropertyPaneDropdown('selectBrand3', {
                  label: 'Select Brand',
                  options: [
                    { key: 'American Wiskey', text: 'American Wiskey' },
                    { key: 'Courvoisier', text: 'Courvoisier' },
                    { key: 'Gin', text: 'Gin' },
                    { key: 'House of Suntory', text: 'House of Suntory' },
                    { key: 'Tequila', text: 'Tequila' },

                  ],
                  //  selectedKey: 'American Wiskey',
                }),
                PropertyFieldFilePicker('filePicker3', {
                  context: this.context,
                  filePickerResult: this.properties.filePickerResult3,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => { console.log(e); this.properties.filePickerResult3 = e; },
                  onChanged: (e: IFilePickerResult) => { console.log(e); this.properties.filePickerResult3 = e; },
                  key: "filePickerId",
                  buttonLabel: "File Picker",
                  label: "File Picker",
                })
              ]
            }
          ]
        },

        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: 'Profile-4 Details',
              groupFields: [
                PropertyPaneTextField('profileName4', {
                  label: "Name:",
                }),
                PropertyPaneTextField('role4', {
                  label: "Role:",
                }),
                PropertyPaneTextField('byline4', {
                  label: "Byline:",
                }),
                PropertyPaneTextField('description4', {
                  label: "Description:",
                }),
                PropertyPaneDropdown('selectBrand4', {
                  label: 'Select Brand',
                  options: [
                    { key: 'American Wiskey', text: 'American Wiskey' },
                    { key: 'Courvoisier', text: 'Courvoisier' },
                    { key: 'Gin', text: 'Gin' },
                    { key: 'House of Suntory', text: 'House of Suntory' },
                    { key: 'Tequila', text: 'Tequila' },

                  ],
                  //  selectedKey: 'American Wiskey',
                }),
                PropertyFieldFilePicker('filePicker4', {
                  context: this.context,
                  filePickerResult: this.properties.filePickerResult4,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => { console.log(e); this.properties.filePickerResult4 = e; },
                  onChanged: (e: IFilePickerResult) => { console.log(e); this.properties.filePickerResult4 = e; },
                  key: "filePickerId",
                  buttonLabel: "File Picker",
                  label: "File Picker",
                })
              ]
            }
          ]
        },

        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: 'Profile-5 Details',
              groupFields: [
                PropertyPaneTextField('profileName5', {
                  label: "Name:",
                }),
                PropertyPaneTextField('role5', {
                  label: "Role:",
                }),
                PropertyPaneTextField('byline5', {
                  label: "Byline:",
                }),
                PropertyPaneTextField('description5', {
                  label: "Description:",
                }),
                PropertyPaneDropdown('selectBrand5', {
                  label: 'Select Brand',
                  options: [
                    { key: 'American Wiskey', text: 'American Wiskey' },
                    { key: 'Courvoisier', text: 'Courvoisier' },
                    { key: 'Gin', text: 'Gin' },
                    { key: 'House of Suntory', text: 'House of Suntory' },
                    { key: 'Tequila', text: 'Tequila' },

                  ],
                  //  selectedKey: 'American Wiskey',
                }),
                PropertyFieldFilePicker('filePicker5', {
                  context: this.context,
                  filePickerResult: this.properties.filePickerResult5,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => { console.log(e); this.properties.filePickerResult5 = e; },
                  onChanged: (e: IFilePickerResult) => { console.log(e); this.properties.filePickerResult5 = e; },
                  key: "filePickerId",
                  buttonLabel: "File Picker",
                  label: "File Picker",
                })
              ]
            }
          ]
        },




      ]


    };
  }
}
