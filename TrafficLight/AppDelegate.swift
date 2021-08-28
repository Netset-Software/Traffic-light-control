//
//  AppDelegate.swift
//  TrafficLight
//
//  Created by  Apple on 28/08/21.
//


import UIKit

private let UnitTestingEnvVar = "TrafficTesting"

@UIApplicationMain
final class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?


//    lazy var coordinator: TrafficLightsCoordinator? = {
//        let env = ProcessInfo.processInfo.environment
//        return env[UnitTestingEnvVar] == nil ? TrafficLightsCoordinator(config:TrafficLightsCoordinatorConfig(launchEnv:env)) : nil
//    }()
   

    internal func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
//        coordinator?.start()
//        coordinator?.subscribe(presenter: window?.rootViewController as? TrafficLightPresenter)
        return true
    }
}

//extension TrafficLightsCoordinatorConfig {
//    init(launchEnv: [String:String]) {
//        self.amberDuration = 5
//        self.cycleDuration  = 30
//        self.initialElapsedTime = 0
//        self.initialState = [.east:.green,.north:.red]
//    }
//}

