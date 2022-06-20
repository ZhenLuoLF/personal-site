variable "aws_access_key_id" {
  type    = string
  default = ""
}

variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "aws_secret_accesss_key" {
  type    = string
  default = ""
}

variable "source_ami" {
  type    = string
  default = "ami-0022f774911c1d690"
}

variable "ssh_username" {
  type    = string
  default = "ec2-user"
}

variable "subnet_id" {
  type    = string
  default = ""
}

locals { timestamp = regex_replace(timestamp(), "[- TZ:]", "") }

source "amazon-ebs" "autogenerated_1" {
  access_key      = "${var.aws_access_key_id}"
  ami_description = "Personal Site based on Amazon Linux 2 AMI"
  ami_name        = "Personal_Site${local.timestamp}"
  ami_users = [
    "619083854262",
    "489783191838",
  ]
  instance_type = "t2.micro"
  launch_block_device_mappings {
    delete_on_termination = true
    device_name           = "/dev/xvda"
    volume_size           = 20
    volume_type           = "gp2"
  }
  region       = "${var.aws_region}"
  secret_key   = "${var.aws_secret_accesss_key}"
  source_ami   = "${var.source_ami}"
  ssh_username = "${var.ssh_username}"
  subnet_id    = "${var.subnet_id}"
}

build {
  sources = ["source.amazon-ebs.autogenerated_1"]

  provisioner "file" {
    source      = "./front-end/build"
    destination = "~/"
  }
  provisioner "shell" {
    inline = [
      "sudo yum -y update",
      "sudo yum -y install ruby",
      "sudo yum -y install wget",
      "sudo yum -y groupinstall \"Development Tools\"",
      "sudo yum -y install -y amazon-linux-extras",
      "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash",
      ". ~/.nvm/nvm.sh",
      "nvm install 16",
      "cd ~",
      "npm install -g serve",
      "sudo yum -y install mod_ssl",
    ]
  }
}