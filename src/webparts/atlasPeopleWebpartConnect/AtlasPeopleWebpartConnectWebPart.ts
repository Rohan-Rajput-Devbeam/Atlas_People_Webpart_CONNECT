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

import { PropertyFieldCollectionData, CustomCollectionFieldType } from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';
import { RichText } from "@pnp/spfx-controls-react/lib/RichText";

import { PropertyFieldFilePicker, IPropertyFieldFilePickerProps, IFilePickerResult } from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";

import { PropertyFieldCodeEditor, PropertyFieldCodeEditorLanguages } from '@pnp/spfx-property-controls/lib/PropertyFieldCodeEditor';

import { PropertyFieldMultiSelect } from '@pnp/spfx-property-controls/lib/PropertyFieldMultiSelect';
import { IAtlasPeopleWebpartConnectWebPartProps } from './IAtlasPeopleWebpartConnectWebPartProps';



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

        htmlCode1: this.properties.htmlCode1,

        selectBrand1: this.properties.selectBrand1,
        selectBrand2: this.properties.selectBrand2,
        selectBrand3: this.properties.selectBrand3,
        selectBrand4: this.properties.selectBrand4,
        selectBrand5: this.properties.selectBrand5,

        byline1: this.properties.byline1,
        byline2: this.properties.byline2,
        byline3: this.properties.byline3,
        byline4: this.properties.byline4,
        byline5: this.properties.byline5,

        collectionData1: this.properties.collectionData1,
        collectionData2: this.properties.collectionData2,
        collectionData3: this.properties.collectionData3,
        collectionData4: this.properties.collectionData4,
        collectionData5: this.properties.collectionData5,

        fb1: this.properties.fb1,
        fb2: this.properties.fb2,
        fb3: this.properties.fb3,
        fb4: this.properties.fb4,
        fb5: this.properties.fb5,

        insta1: this.properties.insta1,
        insta2: this.properties.insta2,
        insta3: this.properties.insta3,
        insta4: this.properties.insta4,
        insta5: this.properties.insta5,

        twitter1: this.properties.twitter1,
        twitter2: this.properties.twitter2,
        twitter3: this.properties.twitter3,
        twitter4: this.properties.twitter4,
        twitter5: this.properties.twitter5,

        yt1: this.properties.yt1,
        yt2: this.properties.yt2,
        yt3: this.properties.yt3,        
        yt4: this.properties.yt4,
        yt5: this.properties.yt5,

        linkedIn1: this.properties.linkedIn1,
        linkedIn2: this.properties.linkedIn2,
        linkedIn3: this.properties.linkedIn3,
        linkedIn4: this.properties.linkedIn4,
        linkedIn5: this.properties.linkedIn5,

        yammer1: this.properties.yammer1,
        yammer2: this.properties.yammer2,
        yammer3: this.properties.yammer3,
        yammer4: this.properties.yammer4,
        yammer5: this.properties.yammer5,


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

  private onTextChange = (newText: string, id: number) => {
    console.log(newText);
    // newText = newText.replace(" bold ", " <strong>bold</strong> ");
    // this.properties.description1 = newText;
    console.log(this.properties.description1)
    switch (id) {
      case 1: {
        this.properties.description1 = newText;
        break;
      }
      case 2: {
        this.properties.description2 = newText;
        break;
      }
      case 3: {
        this.properties.description3 = newText;
        break;
      }
      case 4: {
        this.properties.description4 = newText;
        break;
      }
      case 5: {
        this.properties.description5 = newText;
        break;
      }
      default: {
        console.log("default--->")
      }
    }


    return newText;
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
                // PropertyPaneTextField('description1', {
                //   label: "Description:",
                // }),
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
                PropertyPaneTextField('fb1', {
                  label: "Facebook ID:",
                  placeholder: "Enter your Facebook ID"
                }),
                PropertyPaneTextField('insta1', {
                  label: "Instagram ID:",
                  placeholder: "Enter your Instagram ID"
                }),
                PropertyPaneTextField('twitter1', {
                  label: "Twitter Handle:",
                  placeholder: "Enter your Twitter Handle"
                }),
                PropertyPaneTextField('yt1', {
                  label: "YoutubeChannel:",
                  placeholder: "Enter your Youtube Channel"
                }),
                PropertyPaneTextField('linkedIn1', {
                  label: "LinkedIn Id:",
                  placeholder: "Enter your LinkedIn Id"
                }),
                PropertyPaneTextField('yammer1', {
                  label: "Yammer Id:",
                  placeholder: "Enter your Yammer Id"
                }),

                //collecshon denge idhaar

                PropertyFieldCollectionData("collectionData1", {
                  key: "collectionData1",
                  label: "Collection data",
                  panelHeader: "Collection data panel header",
                  manageBtnLabel: "Manage collection data",
                  value: this.properties.collectionData1,
                  fields: [
                    {
                      id: "richTextField",
                      title: "Rich Text Field",
                      type: CustomCollectionFieldType.custom,
                      onCustomRender: (field, value, onUpdate, item, itemId, onError) => {
                        return (
                          React.createElement(RichText, { value: value = this.properties.description1, onChange: (text) => this.onTextChange(text, 1) }))


                      }
                    }
                  ],
                  disabled: false
                })

                //collecshon khatam idhaar

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
                PropertyPaneTextField('fb2', {
                  label: "Facebook ID:",
                  placeholder: "Enter your Facebook ID"
                }),
                PropertyPaneTextField('insta2', {
                  label: "Instagram ID:",
                  placeholder: "Enter your Instagram ID"
                }),
                PropertyPaneTextField('twitter2', {
                  label: "Twitter Handle:",
                  placeholder: "Enter your Twitter Handle"
                }),
                PropertyPaneTextField('yt2', {
                  label: "YoutubeChannel:",
                  placeholder: "Enter your Youtube Channel"
                }),
                PropertyPaneTextField('linkedIn2', {
                  label: "LinkedIn Id:",
                  placeholder: "Enter your LinkedIn Id"
                }),
                PropertyPaneTextField('yammer2', {
                  label: "Yammer Id:",
                  placeholder: "Enter your Yammer Id"
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
                }),
                PropertyFieldCollectionData("collectionData2", {
                  key: "collectionData2",
                  label: "Collection data",
                  panelHeader: "Collection data panel header",
                  manageBtnLabel: "Manage collection data",
                  value: this.properties.collectionData2,
                  fields: [
                    {
                      id: "richTextField",
                      title: "Rich Text Field",
                      type: CustomCollectionFieldType.custom,
                      onCustomRender: (field, value, onUpdate, item, itemId, onError) => {
                        return (
                          React.createElement(RichText, { value: value = this.properties.description2, onChange: (text) => this.onTextChange(text, 2) }))
                      }
                    }
                  ],
                  disabled: false
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
                PropertyPaneTextField('fb3', {
                  label: "Facebook ID:",
                  placeholder: "Enter your Facebook ID"
                }),
                PropertyPaneTextField('insta3', {
                  label: "Instagram ID:",
                  placeholder: "Enter your Instagram ID"
                }),
                PropertyPaneTextField('twitter3', {
                  label: "Twitter Handle:",
                  placeholder: "Enter your Twitter Handle"
                }),
                PropertyPaneTextField('yt3', {
                  label: "YoutubeChannel:",
                  placeholder: "Enter your Youtube Channel"
                }),
                PropertyPaneTextField('linkedIn3', {
                  label: "LinkedIn Id:",
                  placeholder: "Enter your LinkedIn Id"
                }),
                PropertyPaneTextField('yammer3', {
                  label: "Yammer Id:",
                  placeholder: "Enter your Yammer Id"
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
                }),
                PropertyFieldCollectionData("collectionData3", {
                  key: "collectionData3",
                  label: "Collection data",
                  panelHeader: "Collection data panel header",
                  manageBtnLabel: "Manage collection data",
                  value: this.properties.collectionData3,
                  fields: [
                    {
                      id: "richTextField",
                      title: "Rich Text Field",
                      type: CustomCollectionFieldType.custom,
                      onCustomRender: (field, value, onUpdate, item, itemId, onError) => {
                        return (
                          React.createElement(RichText, { value: value = this.properties.description3, onChange: (text) => this.onTextChange(text, 3) }))
                      }
                    }
                  ],
                  disabled: false
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

                PropertyPaneTextField('fb4', {
                  label: "Facebook ID:",
                  placeholder: "Enter your Facebook ID"
                }),
                PropertyPaneTextField('insta4', {
                  label: "Instagram ID:",
                  placeholder: "Enter your Instagram ID"
                }),
                PropertyPaneTextField('twitter4', {
                  label: "Twitter Handle:",
                  placeholder: "Enter your Twitter Handle"
                }),
                PropertyPaneTextField('yt4', {
                  label: "YoutubeChannel:",
                  placeholder: "Enter your Youtube Channel"
                }),
                PropertyPaneTextField('linkedIn4', {
                  label: "LinkedIn Id:",
                  placeholder: "Enter your LinkedIn Id"
                }),
                PropertyPaneTextField('yammer4', {
                  label: "Yammer Id:",
                  placeholder: "Enter your Yammer Id"
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
                }),
                PropertyFieldCollectionData("collectionData4", {
                  key: "collectionData4",
                  label: "Collection data",
                  panelHeader: "Collection data panel header",
                  manageBtnLabel: "Manage collection data",
                  value: this.properties.collectionData4,
                  fields: [
                    {
                      id: "richTextField",
                      title: "Rich Text Field",
                      type: CustomCollectionFieldType.custom,
                      onCustomRender: (field, value, onUpdate, item, itemId, onError) => {
                        return (
                          React.createElement(RichText, { value: value = this.properties.description4, onChange: (text) => this.onTextChange(text, 4) }))
                      }
                    }
                  ],
                  disabled: false
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
                PropertyPaneTextField('fb5', {
                  label: "Facebook ID:",
                  placeholder: "Enter your Facebook ID"
                }),
                PropertyPaneTextField('insta5', {
                  label: "Instagram ID:",
                  placeholder: "Enter your Instagram ID"
                }),
                PropertyPaneTextField('twitter5', {
                  label: "Twitter Handle:",
                  placeholder: "Enter your Twitter Handle"
                }),
                PropertyPaneTextField('yt5', {
                  label: "YoutubeChannel:",
                  placeholder: "Enter your Youtube Channel"
                }),
                PropertyPaneTextField('linkedIn5', {
                  label: "LinkedIn Id:",
                  placeholder: "Enter your LinkedIn Id"
                }),
                PropertyPaneTextField('yammer5', {
                  label: "Yammer Id:",
                  placeholder: "Enter your Yammer Id"
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
                }),
                PropertyFieldCollectionData("collectionData5", {
                  key: "collectionData5",
                  label: "Collection data",
                  panelHeader: "Collection data panel header",
                  manageBtnLabel: "Manage collection data",
                  value: this.properties.collectionData5,
                  fields: [
                    {
                      id: "richTextField",
                      title: "Rich Text Field",
                      type: CustomCollectionFieldType.custom,
                      onCustomRender: (field, value, onUpdate, item, itemId, onError) => {
                        return (
                          React.createElement(RichText, { value: value = this.properties.description5, onChange: (text) => this.onTextChange(text, 5) }))
                      }
                    }
                  ],
                  disabled: false
                })
              ]
            }
          ]
        },




      ]


    };
  }
}
