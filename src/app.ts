/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {
    Actor,
    AnimationEaseCurves,
    AnimationKeyframe,
    AnimationWrapMode,
    ButtonBehavior,
    Context,
    Quaternion,
    TextAnchorLocation,
    Vector3,
    ColliderGeometry,
    Collider,
    User,
} from '@microsoft/mixed-reality-extension-sdk';
import * as MRE from '@microsoft/mixed-reality-extension-sdk';

/**
 * The main class of this app. All the logic goes here.
 */
export default class HelloWorld {
    [x: string]: any;
    private text: Actor = null;
    private cube: Actor = null;
    constructor(private context: Context, private baseUrl: string) {
        this.context.onStarted(() => this.started());
    }
    /**
     * Once the context is "started", initialize the app.
     */
    private started() {
        // Create a new actor with no mesh, but some text. This operation is asynchronous, so
        // it returns a "forward" promise (a special promise, as we'll see later).
        const textPromise = Actor.CreateEmpty(this.context, {
            actor: {
                name: 'Text',
                transform: {
                },
                text: {
                    contents: "",
                    anchor: TextAnchorLocation.MiddleCenter,
                    color: { r: 213 / 255, g: 0 / 255, b: 213 / 255 },
                    height: 0
                }
            }
        });

        // AltspaceVR resource IDs from https://account.altvr.com/kits/
        const libraryActors: MRE.Actor[] = [];
        libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
            resourceId: "artifact: 989569229617365197",
            actor: {
                name: 'Cube',
                transform: {
                }
            }
        }));
        // Set up cursor interaction. We add the input behavior ButtonBehavior to the cube.
        // Button behaviors have two pairs of events: hover start/stop, and click start/stop.
      libraryActors.forEach((actor: MRE.Actor) => {
        if (actor) {
            const buttonBehavior = actor.setBehavior(MRE.ButtonBehavior);

                // Trigger the grow/shrink animations on hover.
                  //@ts-ignore
                buttonBehavior.onClick((user: User) => {        const libraryActors: MRE.Actor[] = [];
                    libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
                        resourceId: "artifact: 1265485056982385660",
                        actor: {
                            name: 'Pandafog 03',
                            transform: {
                            
                            }
                        }
                    }));
                });
        // AltspaceVR resource IDs from https://account.altvr.com/kits/
        const libraryActors: MRE.Actor[] = [];
        libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
            resourceId: "artifact: 989569229617365197",
            actor: {
                name: 'Cube',
                transform: {
                             local: { position: { x: 1, y: 0, z: 0 } }
                }
            }
        }));
        // Set up cursor interaction. We add the input behavior ButtonBehavior to the cube.
        // Button behaviors have two pairs of events: hover start/stop, and click start/stop.
   libraryActors.forEach((actor: MRE.Actor) => {
        if (actor) {
            const buttonBehavior = actor.setBehavior(MRE.ButtonBehavior);
                // Trigger the grow/shrink animations on hover.
                  //@ts-ignore
                buttonBehavior.onClick((user: User) => {        const libraryActors: MRE.Actor[] = [];
                    libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
                        resourceId: "artifact: 1265485061176689661",
                        actor: {
                            name: 'Pandafog 02',
                            transform: {
                            }
                        }
                    }));
                });

        // AltspaceVR resource IDs from https://account.altvr.com/kits/
        const libraryActors: MRE.Actor[] = [];
        libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
            resourceId: "artifact: 989569229617365197",
            actor: {
                name: 'Cube',
                transform: {
                local: { position: { x: -1, y: 0, z: 0 } }
                }
            }
        }));
        // Set up cursor interaction. We add the input behavior ButtonBehavior to the cube.
        // Button behaviors have two pairs of events: hover start/stop, and click start/stop.
        libraryActors.forEach((actor: MRE.Actor) => {
        if (actor) {
            const buttonBehavior = actor.setBehavior(MRE.ButtonBehavior);

                // Trigger the grow/shrink animations on hover.
                  //@ts-ignore
                buttonBehavior.onClick((user: User) => {        const libraryActors: MRE.Actor[] = [];
                    libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
                        resourceId: "artifact: 1265485052519646203",
                        actor: {
                            name: 'Pandafog 01',
                            transform: {
                            }
                        }
                    }));
                });
    }
}
        )
}
})
            }
        })
    }
}
