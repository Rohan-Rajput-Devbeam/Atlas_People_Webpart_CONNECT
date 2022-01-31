import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AtlasPeopleWebpartConnectWebPartStrings';
import AtlasPeopleWebpartConnect from './components/AtlasPeopleWebpartConnect';
import { IAtlasPeopleWebpartConnectProps } from './components/IAtlasPeopleWebpartConnectProps';


import { PropertyFieldFilePicker, IPropertyFieldFilePickerProps, IFilePickerResult } from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";

import { PropertyFieldCodeEditor, PropertyFieldCodeEditorLanguages } from '@pnp/spfx-property-controls/lib/PropertyFieldCodeEditor';

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

  profileDesignation1: any;
  profileDesignation2: any;
  profileDesignation3: any;
  profileDesignation4: any;
  profileDesignation5: any;


  profileName1: any;
  profileName2: any;
  profileName3: any;
  profileName4: any;
  profileName5: any;

  htmlCode1: any;


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

        profileDesignation1: this.properties.profileDesignation1,
        profileDesignation2: this.properties.profileDesignation2,
        profileDesignation3: this.properties.profileDesignation3,
        profileDesignation4: this.properties.profileDesignation4,
        profileDesignation5: this.properties.profileDesignation5,

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

        htmlCode1 : this.properties.htmlCode1
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
                PropertyPaneTextField('profileDesignation1', {
                  label: "Designation:",
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
                PropertyPaneTextField('profileDesignation2', {
                  label: "Designation:",
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
                PropertyPaneTextField('profileDesignation3', {
                  label: "Designation:",
                }),
                PropertyPaneTextField('description3', {
                  label: "Description:",
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
                PropertyPaneTextField('profileDesignation4', {
                  label: "Designation:",
                }),
                PropertyPaneTextField('description4', {
                  label: "Description:",
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
                PropertyPaneTextField('profileDesignation5', {
                  label: "Role:",
                }),
                PropertyPaneTextField('description5', {
                  label: "Description:",
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
