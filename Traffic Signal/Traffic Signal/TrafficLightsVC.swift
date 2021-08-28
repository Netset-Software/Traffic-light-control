//
//  TrafficLightsVC.swift
//  Traffic Signal
//
//  Created by Netset on 28/08/21.
//

import UIKit

class TrafficLightsVC: UIViewController {
    @IBOutlet weak var lblTimerTop: UILabel!
    @IBOutlet weak var lblTimerBottom: UILabel!
    @IBOutlet weak var lblTimerLeft: UILabel!
    @IBOutlet weak var lblTimerRight: UILabel!
    @IBOutlet weak var btnTop: UIButton!
    @IBOutlet weak var btnBottom: UIButton!
    @IBOutlet weak var btnLeft: UIButton!
    @IBOutlet weak var btnRight: UIButton!
    
    var backgroundTask: UIBackgroundTaskIdentifier = UIBackgroundTaskIdentifier.invalid
    var timer = Timer()
    var fractions: Int = 30
    var type = "T"
    
    override func viewDidLoad() {
        super.viewDidLoad()
        activeLight()
        btnRight.layer.cornerRadius = 40
        btnTop.layer.cornerRadius = 40
        btnLeft.layer.cornerRadius = 40
        btnBottom.layer.cornerRadius = 40
        // Do any additional setup after loading the view.
    }
    
    @objc func updateTimer(){
        fractions = fractions - 1
        if fractions == 0 {
            if type == "T" {
              type = "R"
            } else if type == "R" {
                type = "B"
            } else if type == "B"{
                type = "L"
            } else {
                type = "T"
            }
            activeLight()
        }
        
        if fractions < 5 {
            if type == "T" {
                btnRight.backgroundColor = #colorLiteral(red: 0.9529411793, green: 0.6862745285, blue: 0.1333333403, alpha: 1)
            } else if type == "R" {
                btnBottom.backgroundColor = #colorLiteral(red: 0.9529411793, green: 0.6862745285, blue: 0.1333333403, alpha: 1)
            } else if type == "B"{
                btnLeft.backgroundColor = #colorLiteral(red: 0.9529411793, green: 0.6862745285, blue: 0.1333333403, alpha: 1)
            } else {
                btnTop.backgroundColor = #colorLiteral(red: 0.9529411793, green: 0.6862745285, blue: 0.1333333403, alpha: 1)
            }
        }
        lblTimerTop.isHidden = type != "T"
        lblTimerBottom.isHidden = type != "B"
        lblTimerLeft.isHidden = type != "L"
        lblTimerRight.isHidden = type != "R"
        if type == "T" {
            lblTimerTop.text = "\(fractions)"
        } else  if type == "B" {
            lblTimerBottom.text = "\(fractions)"
        } else  if type == "L" {
            lblTimerLeft.text = "\(fractions)"
        } else {
            lblTimerRight.text = "\(fractions)"
        }
    }
    
    func activeLight()  {
        lblTimerTop.text = type == "T" ? "30" : ""
        lblTimerBottom.text = type == "B" ? "30" : ""
        lblTimerLeft.text = type == "L" ? "30" : ""
        lblTimerRight.text = type == "R" ? "30" : ""
        btnTop.isEnabled = type == "T"
        btnLeft.isEnabled = type == "L"
        btnBottom.isEnabled = type == "B"
        btnRight.isEnabled = type == "R"
        btnTop.backgroundColor = type == "T" ? #colorLiteral(red: 0.3411764801, green: 0.6235294342, blue: 0.1686274558, alpha: 1) : #colorLiteral(red: 0.9254902005, green: 0.2352941185, blue: 0.1019607857, alpha: 1)
        btnBottom.backgroundColor = type == "B" ? #colorLiteral(red: 0.3411764801, green: 0.6235294342, blue: 0.1686274558, alpha: 1) : #colorLiteral(red: 0.9254902005, green: 0.2352941185, blue: 0.1019607857, alpha: 1)
        btnLeft.backgroundColor = type == "L" ? #colorLiteral(red: 0.3411764801, green: 0.6235294342, blue: 0.1686274558, alpha: 1) : #colorLiteral(red: 0.9254902005, green: 0.2352941185, blue: 0.1019607857, alpha: 1)
        btnRight.backgroundColor = type == "R" ? #colorLiteral(red: 0.3411764801, green: 0.6235294342, blue: 0.1686274558, alpha: 1) : #colorLiteral(red: 0.9254902005, green: 0.2352941185, blue: 0.1019607857, alpha: 1)
        timer.invalidate()
        fractions = 30
        timer = Timer.scheduledTimer(timeInterval: 1.0, target: self, selector: #selector(updateTimer), userInfo: nil, repeats: true)
    }
    
    


}
